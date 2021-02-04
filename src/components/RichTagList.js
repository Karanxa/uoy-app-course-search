import React from "react";
import PropTypes from "prop-types";

const RichTagList = (props) => {
    return <ul className="rich-tag-list">{props.children}</ul>;
};

RichTagList.propTypes = {
    children: PropTypes.node,
};

export { RichTagList };
