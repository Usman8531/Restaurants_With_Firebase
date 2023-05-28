/* eslint-disable no-unused-vars */
import React, { useState } from "react";

//
import { motion } from "framer-motion";

// icons
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";

// firebase

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
  deleteObject,
} from "firebase/storage";
import { app, getData, setData } from "../../../config/firebase.config";
//  importing data of different catagories

import { categories } from "../../../utils/data";
import Loader from "../../../components/Dashboard/Loader/Loader";
import { useAuthContext } from "../../../context/AuthContext";
export default function DashboardHome() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [uploadImg, setImg] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");

  // uploading images here

  const storage = getStorage(app);
  const uploadImage = (e) => {
    setIsLoading(true);
    const imgUploaded = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imgUploaded.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgUploaded);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // setFields(true);
        window.toastify(error.message, "error");
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          setIsLoading(false);
          window.toastify("Image is Upload", "success");
          // console.log("File available at", downloadURL);
        });
      }
    );
  };

  // delete the uploaded img

  const deleteImage = () => {
    const desertRef = ref(storage, uploadImg);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        window.toastify("Deleted Image", "success");
        // setAlertStatus("success");
        setImg(null);
        setIsLoading(false);
      })
      .catch((error) => {
        window.toastify(error.message, "error");
        // Uh-oh, an error occurred!
      });
  };
  // get items after uploading
  const { state, dispatch } = useAuthContext();
  // fetching all data from fireStore
  const fetchAllItems = async () => {
    await getData().then((data) => {
      // console.log(data);
      dispatch({
        type: "SET_FOOD_ITEMS",
        payload: data,
      });
    });
  };

  // upload the data to the firestore
  const saveChanges = () => {
    setIsLoading(true);
    try {
      if (
        (!title && title.length < 4) ||
        !price ||
        !uploadImage ||
        !calories ||
        !category
      ) {
        window.toastify("Required Fields can't be Empty", "error");
      } else if (category === "Select the Category") {
        window.toastify("select the category", "error");
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          price: price,
          imageUrl: uploadImg,
          category: category,
          calories: calories,
          qty: 1,
        };
        setData(data);
        clearData();
        window.toastify("Uploaded Successfully", "success");
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      window.toastify("Something went wrong", "error");
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
    // after adding the data feting it from database
    fetchAllItems();
  };

  // clear the input fields after uploading the data
  const clearData = () => {
    setTitle("");
    setCalories("");
    setCategory("Select the Category");
    setPrice("");
    setImg(null);
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center h-100"
        style={{ minHeight: "80vh" }}
      >
        <div className="row  h-100 w-100 text-center d-flex justify-content-center align-items-center">
          <div
            className="col-12 card py-3 col-md-8 col-lg-6 card shadow border-0"
            style={{ backgroundColor: "#f3f2ef" }}
          >
            <div className="border-bottom w-100 text-center">
              <MdFastfood className="d-inline fs-3 text-start opacity-75" />
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="d-inline form-control w-75 border-0 dashboard-input bg-transparent"
                placeholder="Give me a Title ....."
              />
            </div>
            <div className="border w-100 text-center my-3">
              <select
                className="form-select btn border-1"
                aria-label="Default select example"
                // defaultValue={}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option
                  className="Disabled opacity-75"
                  value={"Select the Category"}
                >
                  Select the Category
                </option>
                {categories &&
                  categories.map((item) => {
                    return (
                      <option
                        className="btn"
                        key={item.id}
                        value={item.urlParamName}
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div
              className={`border w-100 text-center my-3 border-1 rounded-2  justify-content-center align-items-center d-flex`}
              style={{ minHeight: "30vh" }}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!uploadImg ? (
                    <>
                      <label className="" style={{ cursor: "pointer" }}>
                        <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                          <MdCloudUpload className="fs-1 opacity-75 my-3" />
                          <p className="opacity-75">
                            Click here to upload image
                          </p>
                        </div>
                        <input
                          type="file"
                          name="image"
                          className="h-0 w-0 d-none"
                          id=""
                          accept="image/*"
                          onChange={uploadImage}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="">
                        <img
                          src={uploadImg}
                          alt="uploaded img"
                          className="img-fluid object-fit-contain d-block overflow-hidden"
                          style={{ height: "350px" }}
                        />
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          transition={{ duration: 0.1 }}
                          className="btn btn-secondary rounded-0"
                          onClick={deleteImage}
                        >
                          Delete Image <MdDelete />
                        </motion.button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="border-bottom w-100 text-center">
                  <MdFoodBank className="d-inline fs-3 text-start opacity-75" />
                  <input
                    type="text"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    className="d-inline form-control w-75 border-0 dashboard-input bg-transparent "
                    placeholder="Calories"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border-bottom w-100 text-center">
                  <MdAttachMoney className="d-inline fs-3 text-start opacity-75" />
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="d-inline form-control w-75 border-0 dashboard-input bg-transparent"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12 col-md-3 offset-md-9">
                <button
                  className="btn w-100 btn-secondary text-white border-0 rounded-0"
                  onClick={saveChanges}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
