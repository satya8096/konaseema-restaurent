import React from "react";

const ProfileNotifications = () => {
  const Notifications = [
    {
        message:"Hey, Your account created !"
    }
  ];
  return (
    <>
      <div>
        <h4>Your Notifications</h4>
        <div>
          {Notifications.length === 0 && (
            <div>
              <p style={{ color: "red" }}>No Notifications</p>
            </div>
          )}
          <ul>
            {Notifications.map((each,index) => {
              return (
                <li className="" style={{listStyleType:"none"}} key={index}>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  {each.message}
                </li>
              );
            })}
          </ul>
          {Notifications.length > 0 && (
            <button
              className="btn"
              style={{ color: "white", backgroundColor: "red" }}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileNotifications;
