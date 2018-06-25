(function() {
    function initFolders() {
        fetch('http://localhost:9000/filemanager?mode=readfolder&path=/')
        .then(function(response) {
            return response.json();
        })
        .then(function (response) {
            var folderList = document.getElementById("fm_list_folders");
            var node = document.createElement("LI");
            if (Array.isArray(response.data)) {
                response.data.forEach(element => {
                    var textnode = document.createTextNode(element.id);
                    node.appendChild(textnode);
                });
            }
            folderList.appendChild(node);
        });
    }

    initFolders();
}
)();