import React, { useState } from "react";

const VideoPreview = ({ src }) => {
    return <video src={src} autoPlay loop muted />;
};

export default VideoPreview;
