
let reset_btn = document.querySelector("#Reset_button");
reset_btn.addEventListener("click", (event) => {
    event.preventDefault();

    let mail = document.querySelector("#reset_id").value;
    let new_ps = document.querySelector("#new").value;
    let confirm_resetpass = document.querySelector("#confirm").value;

    if (confirm_resetpass !== new_ps) {
        alert("Passwords do not match");
    } else {
        const ref = doc(db, "SignUp_details",`${id}`); 

        updateDoc(ref, {
          password: new_ps
        }).then(() => {
            alert("Updated Successfully");
        })
    }
});



