var localSpace = {

    delays: 250,
    indexOfFrames: 0,
    repeat: undefined,
    textScreen: document.getElementById("textArea"),
    choice: document.getElementById("selectAnimation"),
    choiceS: document.getElementById("selectSize"),
    framesToShow: undefined,
    fontSize: ["7", "10", "12", "16", "24", "32"],

    show: function() {
                this.textScreen.value = ANIMATIONS[this.choice.options[this.choice.selectedIndex].value];
          },

    tick: function() {
                this.textScreen.value = this.framesToShow[this.indexOfFrames];
                if (++this.indexOfFrames == this.framesToShow.length) this.indexOfFrames = 0;
          },

    start: function() {
                document.getElementById("ctrlStart").disabled = true;
                document.getElementById("ctrlStop").disabled = false;
                
                this.choice.disabled = true;
                this.framesToShow = this.textScreen.value.split("=====\n");
                this.indexOfFrames = 0;
                this.repeat = setInterval("localSpace.tick()", this.delays);
           },

    stop: function() {
                document.getElementById("ctrlStop").disabled = true;
                clearInterval(this.repeat);
                document.getElementById("ctrlStart").disabled = false;
                this.choice.disabled = false;
                this.show();
         },

    

    turbo: function() {
                if (document.getElementById("ctrlTurbo").checked) this.delays = 50;
                else this.delays = 250;
                clearInterval(this.repeat);
                this.repeat = setInterval("localSpace.tick()", this.delays);
            },

    changeSize: function() {
                var si = this.fontSize[this.choiceS.selectedIndex];
                this.textScreen.style.fontSize = si+ "pt";
            },
};








