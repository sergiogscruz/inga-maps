import { storage } from "../../firebase";

export const UploadImageFirabase = {
    upload: function (type, image) {
        const hashCode = this.generateHash()
        const uploadTask = storage.ref(`images/${type}/${hashCode}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images/${type}/`)
                    .child(hashCode)
                    .getDownloadURL()
                    .then(url => {
                        return url
                    })
            }
        )
    },
    generateHash: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return (s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4()).toUpperCase()
    }
}
