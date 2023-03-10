import React, { useState } from "react";
import teamMemberPic from "../../../assets/TeamMemberPic.png";

import classes from "./Discussions.module.css";

const Discussions = () => {
  const [likesCount, setLikesCount] = useState(5);
  const [isLiked, setIsLiked] = useState(false);
  const [displayComments, setDisplayComments] = useState(false);
  const [comment, setComment] = useState();
  const [commentList, setCommentList] = useState([]);

  const onLikeHandler = () => {
    setLikesCount(likesCount + 1);
    setIsLiked(true);
  };

  const onUnLikeHandler = () => {
    setLikesCount(likesCount - 1);
    setIsLiked(false);
  };

  const onCommentHandler = () => {
    setDisplayComments(!displayComments);
  };

  const onCommentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onAddCommentHandler = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setCommentList([
      ...commentList,
      {
        comment: comment,
        dateTime: date + " " + time,
      },
    ]);
    setComment("");
  };

  const onCloseCommitHandler = () => {
    setDisplayComments(false);
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-row">
        <img className="rounded-circle" src={teamMemberPic} width="40" />
        <div className="d-flex flex-column justify-content-start">
          <span className={`d-block name ${classes.name}`}>Team Lead 1</span>
          <span className={`text-black-50 ${classes.designation}`}>
            Project Lead
          </span>
        </div>
      </div>
      <p className={`text-justify ${classes.description}`}>
        Latest Idea, subscription-based service allowing people to invest in
        projects that offset carbon footprints. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer rutrum nisl mauris, nec gravida est
        malesuada id.
      </p>
      <div className={`d-flex flex-row ${classes["text-size"]}`}>
        <div className="p-1">
          {!isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-hand-thumbs-up"
              viewBox="0 0 16 16"
              onClick={onLikeHandler}
              cursor="pointer"
            >
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              class="bi bi-hand-thumbs-up-fill"
              viewBox="0 0 16 16"
              onClick={onUnLikeHandler}
              cursor="pointer"
            >
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>
          )}
          <span className="ml-1">{likesCount} Likes</span>
        </div>
        <div className={`p-1 ${classes.comments}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-chat-dots"
            viewBox="0 0 16 16"
            onClick={onCommentHandler}
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
          </svg>
          <span className="ml-1" onClick={onCommentHandler}>
            Comments
          </span>
        </div>
      </div>

      {displayComments && (
        <div>
          <hr />
          <div className="d-flex flex-row align-items-start">
            <textarea
              className="form-control textarea"
              onChange={onCommentChangeHandler}
              value={comment}
            ></textarea>
          </div>
          <div className="mt-2 text-right">
            <button
              className="btn btn-primary btn-sm shadow-none"
              type="button"
              onClick={onAddCommentHandler}
            >
              Post comment
            </button>
            <button
              className="btn btn-outline-primary btn-sm ml-1 shadow-none"
              type="button"
              onClick={onCloseCommitHandler}
            >
              Cancel
            </button>
          </div>
          {commentList.map((comment, index) => (
            <div key={index} /* className="ml-4" */>
              <div className="d-flex flex-row user-info">
                <img
                  className="rounded-circle"
                  src={teamMemberPic}
                  width="30"
                />
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span
                    className={`d-block name ${classes["text-size"]}`}
                    style={{ fontSize: "13px" }}
                  >
                    Team Member
                  </span>
                  <span
                    className={`date text-black-50 ${classes["text-size"]}`}
                  >
                    {comment.dateTime}
                  </span>
                </div>
              </div>
              <p className={`text-left date ${classes["comment-text"]}`}>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Discussions;
