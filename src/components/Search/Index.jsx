import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { navbarSearchAction } from "../../redux/actions/navbarAction";
import { AiOutlineSearch } from "react-icons/ai";
import {
  CHNAGE_VALUE_SEARCH,
  CLOSE_SEARCH,
  RESET_VALUE_SEARCH,
} from "../../redux/types";
import { valueOfSearchAction } from "../../redux/actions/searchAction";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function Index() {
  const { display_search } = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useHistory();

  const handleChange = async (e) => {
    // store value in store redux for access it again in anywhere

    if (e.keyCode === 13) {
      if (e.target.value.trim()) {
        dispatch(valueOfSearchAction(CHNAGE_VALUE_SEARCH, e.target.value));
        dispatch(navbarSearchAction(CLOSE_SEARCH, false));
        route.push("/search");
      } else {
        alert("input of search must be not empty!");
      }
    }
  };

  useEffect(() => {
    return () => {
      dispatch(valueOfSearchAction(RESET_VALUE_SEARCH, ""));
    };
  }, [dispatch]);

  return (
    <>
      {display_search.status && (
        <div className="group-search d-flex flex-nowrap justify-content-center align-items-center">
          <button
            className="btn close"
            onClick={() => dispatch(navbarSearchAction(CLOSE_SEARCH, false))}>
            <AiOutlineClose />
          </button>
          <div className="control-search">
            <input
              type="search"
              name="search"
              id="searchId"
              placeholder="search here..."
              onKeyUp={handleChange}
              aria-label="search  through site movie ,tv and multi"
            />
            <span className="icon-search">
              <AiOutlineSearch />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
