import exitIcon from "../../assets/exit.svg";

import backIcon from "../../assets/back.svg";

import { useState, useEffect } from "react";
import DocDiscussion from "./DocDiscussion";
import DocDiscussionsGrid from "./DocDiscussionsGrid";

export default function DocDiscussionsHome(props) {
  const { apiDoc, handleExit, clientUserData } = props;
  const [selectedDiscussion, setSelectedDiscussion] = useState();
  const [selectedIndex, setSelectedIndex] = useState();
  const [discussions, setDiscussions] = useState();

  function handleBack() {
    setSelectedDiscussion();
    setDiscussions();
  }

  return (
    <div className="discussion-content">
      {!selectedDiscussion ? (
        <>
          <div className="discussions-header-container first-cont">
            <h3 className="discussions-header">Discussions</h3>
            <div className="flex nav-buttons">
              {selectedDiscussion && (
                <button onClick={handleBack} className="back">
                  <img className="back-icon" src={backIcon} />
                </button>
              )}
              {/* <button onClick={handleExit} className="exit">
                <img className="exit-icon" src={exitIcon} id="exit" />
              </button> */}
            </div>
          </div>
          <div className="discussions-overflow">
            {apiDoc.discussions ? (
              <DocDiscussionsGrid
                clientUserData={clientUserData}
                apiDoc={apiDoc}
                setSelectedIndex={setSelectedIndex}
                handleExitPopup={handleExit}
                setSelectedDiscussion={setSelectedDiscussion}
                setDiscussions={setDiscussions}
                discussions={discussions}
              />
            ) : (
              "No posts"
            )}
          </div>
        </>
      ) : (
        // after discussion is selected
        <>
          {selectedIndex && (
            <DocDiscussion
              discussions={discussions}
              setDiscussions={setDiscussions}
              selectedDiscussion={selectedDiscussion}
              selectedIndex={selectedIndex}
              clientUserData={clientUserData}
              apiDoc={apiDoc}
              setSelectedDiscussion={setSelectedDiscussion}
              handleBack={handleBack}
              handleExitPopup={handleExit}
            />
          )}
        </>
      )}
    </div>
  );
}
