import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { navbarSearchAction } from "../../redux/actions/navbarAction";
import { CLOSE_SEARCH } from "../../redux/types";
import "./style.css";

export default function Index() {
  const { navbar_search } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value.trim()) {
    }
  };

  return (
    <>
      {navbar_search.status && (
        <div className="group-search d-flex flex-nowrap justify-content-center align-items-center">
          <button
            className="btn close"
            onClick={() => dispatch(navbarSearchAction(CLOSE_SEARCH, false))}>
            <AiOutlineClose />
          </button>
          <div className="control-search">
            <input
              list="data_search"
              type="search"
              name="search"
              id="searchId"
              placeholder="search here..."
              onChange={handleChange}
              aria-label="search  through site movie ,tv and multi"
            />
            <datalist id="data_search">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
          </div>
        </div>
      )}
    </>
  );
}
