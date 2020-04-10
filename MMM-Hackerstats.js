/* Magic Mirror
 * Module: MMM-Hackerstats
 *
 * By JeffVader - CyberPunkHacker
 *
 */
Module.register("MMM-Hackerstats", {

    // Module config defaults.
    defaults: {
        tryhackme_badgeID: "",  //tryhackme.com/profile > click public profile in upper right section > click "Get Badge ID" > get your badgeID number after /badge/
        hackthebox_badgeID: "",  //hackthebox.eu > go to your profile > clock "Get Badge" > get your badgeID number from the after /badge/

    },

/*
* Minimum version for magic mirror
*/

requiresVersion: "2.2.1",    

     getStyles: function() {
     return ["MMM-Hackerstats.css"];
},

    getDom: function() {
        var iframe  = document.createElement("IFRAME");
        iframe.classList.add("iframe")i;
        iframe.style = "border:none";
        iframe.src="https://tryhackme.com/badge/" + this.config.tryhackme_badgeID
        
        return iframe;
    },
});
