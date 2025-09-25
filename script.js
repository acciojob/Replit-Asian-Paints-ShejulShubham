//your JS code here. If required.
const items = document.querySelectorAll(".grid-item");
        const inputId = document.querySelector("#block_id");
        const colorInput = document.querySelector("#color_id");
        
        const gridItems = [];

        const colors = ["red", "green", "yellow", "black", "blue", "white"];

        items.forEach((item)=>{
            gridItems.push(item);
        });

        document.getElementById("reset_button").addEventListener("click", resetAll);

        function resetAll(){
            gridItems.forEach((item)=>{
                item.style.backgroundColor = "transparent";
                
            });
        }

        function changeColor(id, color){
            gridItems[id].style.backgroundColor = color;
        }

        document.getElementById("change_button").addEventListener("click", ()=>{
            const id = inputId.value.trim()
            const color = colorInput.value.trim();
            resetAll();

            if(id > 8){
                alert("id should be in 1 to 9");
                return;
            }

            if(!colors.includes(color)){
                alert("invalid color");
                return;
            }

            changeColor(id-1, color);
        })