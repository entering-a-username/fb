(function () {
    var card = document.getElementById("cardID");
    var addAccount = document.getElementById("addAccountID");
    var cancelAdding = document.getElementById("cancelAddingID");
    addAccount.addEventListener("click", function () {
        card.classList.remove("hidden");
    });
    cancelAdding.addEventListener("click", function () {
        card.classList.add("hidden");
    });
})();
