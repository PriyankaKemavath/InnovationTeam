import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEmployeeDetails } from "../../../fetchers/postFetchers";
import LoadingModal from "../../Modals/LoadingModal/LoadingModal";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";

import classes from "./EmployeeForm.module.css";

const EmployeeForm = () => {
  const navigate = useNavigate();

  const [empName, setEmpName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [activities, setActivities] = useState("");
  const [interests, setInterests] = useState("");
  const [strengthWeakness, setStrengthWeakness] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achievements, setAchievements] = useState("");
  const [topBucketList, setTopBucketList] = useState("");
  const [oneThing, setOneThing] = useState("");
  const [mantra, setMantra] = useState("");
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState();
  const [imageError, setImageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postError, setPostError] = useState({ status: false, message: "" });

  const empNameChangeHandler = (event) => {
    const nameRegExp = /^[A-Za-z][A-Za-z\s]*$/;
    if (event.target.value.length < 3) {
      setNameError("** Name must be at least 3 characters");
      return;
    } else if (!event.target.value.match(nameRegExp)) {
      setNameError("** Only alphabets are allowed");
      return;
    } else {
      setNameError("");
      setEmpName(event.target.value);
    }
  };

  const profilePicChangeHandler = (event) => {
    let uploadedImg = event.target.files[0];
    if (uploadedImg === undefined) {
      setProfilePic("");
      return;
    } else if (uploadedImg.size > 2000000) {
      setImageError("** File size is greater than maximum limit");
      return;
    } else {
      setImageError("");
      let reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(uploadedImg);
    }
  };

  const activitiesChangeHandler = (event) => {
    setActivities(event.target.value);
  };

  const interetsChangeHandler = (event) => {
    setInterests(event.target.value);
  };

  const hobbiesChangeHandler = (event) => {
    setHobbies(event.target.value);
  };

  const achievementsChangeHandler = (event) => {
    setAchievements(event.target.value);
  };

  const strengthWeaknessChangeHandler = (event) => {
    setStrengthWeakness(event.target.value);
  };

  const mantraChangeHandler = (event) => {
    setMantra(event.target.value);
  };

  const oneThingChangeHandler = (event) => {
    setOneThing(event.target.value);
  };

  const topBucketListChangeHandler = (event) => {
    setTopBucketList(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (
      empName.length === 0 ||
      profilePic.length === 0 ||
      activities.length === 0 ||
      interests.length === 0 ||
      strengthWeakness.length === 0 ||
      hobbies.length === 0 ||
      achievements.length === 0 ||
      topBucketList.length === 0 ||
      oneThing.length === 0 ||
      mantra === 0
    ) {
      setError(true);
      return;
    }

    setIsSubmitted(true);

    await postEmployeeDetails({
      empName,
      profilePic,
      activities,
      interests,
      strengthWeakness,
      hobbies,
      achievements,
      topBucketList,
      oneThing,
      mantra,
    })
      .then(() => {
        setIsSubmitted(false);
        navigate("/response");
        console.log("Posted successfully!");
      })
      .catch((error) => {
        setIsSubmitted(false);
        setPostError({ status: true, message: error.message });
        //navigate("/");
        console.log(error, error.message, "error");
      });
  };

  const handleModalClose = () => {
    setPostError({ status: false, message: "" });
    navigate("/");
  };

  return (
    <div className="container">
      <h4 className={`mt-3 text-center ${classes.header}`}>Employee Form</h4>
      <LoadingModal show={isSubmitted} />
      <ErrorModal
        show={postError.status}
        postError={postError.message}
        handleModalClose={handleModalClose}
      />
      <form className="mt-5" onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">
              Employee Name&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={empNameChangeHandler}
              placeholder="Your Name"
            />
            {error && empName.length <= 0 ? (
              <div className={classes.error}>** Please enter your name</div>
            ) : (
              nameError !== undefined && (
                <div className={classes.error}>{nameError}</div>
              )
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="profilepic">
              Upload Profile Picture&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <small>
              <i> (Maximum upload file size: 2 MB) </i>
            </small>
            <input
              type="file"
              className="form-control-file"
              id="profilepic"
              name="profilepic"
              accept="image/*"
              onChange={profilePicChangeHandler}
            />
            {error && profilePic.length <= 0 ? (
              <div className={classes.error}>
                ** Please upload your profile pic
              </div>
            ) : (
              imageError !== "" && (
                <div className={classes.error}>{imageError}</div>
              )
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="activities">
              What are you currently working on?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="activities"
              rows="3"
              onChange={activitiesChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && activities.length <= 0 && (
              <div className={classes.error}>
                ** Please enter your activities
              </div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="interests">
              What is your area of interests?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="interests"
              rows="3"
              onChange={interetsChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && interests.length <= 0 && (
              <div className={classes.error}>
                ** Please enter your area of interests
              </div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="strengthWeakness">
              What are your strengths and weakness?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="strengthWeakness"
              rows="3"
              onChange={strengthWeaknessChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && strengthWeakness.length <= 0 && (
              <div className={classes.error}>
                ** Please enter your strengths and weakness
              </div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="hobbies">
              List down your hobbies&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="hobbies"
              rows="3"
              onChange={hobbiesChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && hobbies.length <= 0 && (
              <div className={classes.error}>** Please enter your hobbies</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="achievements">
              What are your achievements?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="achievements"
              rows="3"
              onChange={achievementsChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && achievements.length <= 0 && (
              <div className={classes.error}>
                ** Please share your achievements
              </div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="topBucketList">
              What is at the top of your bucket list?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="topBucketList"
              rows="3"
              onChange={topBucketListChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && topBucketList.length <= 0 && (
              <div className={classes.error}>
                ** Please share atleast one of your bucket list
              </div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="oneThing">
              Share one thing that no one knows about you&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="oneThing"
              rows="3"
              onChange={oneThingChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && oneThing.length <= 0 && (
              <div className={classes.error}>
                ** Please share one thing that no one knows about you
              </div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="mantra">
              What is your mantra for life?&nbsp;
              <span className={classes.mandatory}>*</span>
            </label>
            <textarea
              className="form-control"
              id="mantra"
              rows="3"
              onChange={mantraChangeHandler}
              placeholder="Your response here"
            ></textarea>
            {error && mantra.length <= 0 && (
              <div className={classes.error}>
                ** Please share your mantra for life
              </div>
            )}
          </div>
        </div>
        <div className="form-group text-center mb-5">
          <button type="submit" className={`btn ${classes.submitbtn}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
