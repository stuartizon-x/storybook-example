module.exports = {
    stories: ["../src/*.stories.jsx"],
    previewHead: (head) => {
        console.log("I am here");
        return (`
            ${head}
            <style>
            body {
                background-color: yellow;
            }
            </style>
        `);
    }
};
