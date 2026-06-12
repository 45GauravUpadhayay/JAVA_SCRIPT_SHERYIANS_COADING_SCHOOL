//? Inheritence -> ek clss dusri class se kuch leti hai

//* Classical Inheritence -> JAVA , CPPP

//? Classes banana and user extends kar dena 


//* Prototype Inheritence -> JAVA

//? yah object se object me hoti hai

let Coffi = {
    color: "dark",
    drink: function(){
        console.log("Gut gut gut");
    },
};

//* Object.create -> isme hamne jo pass kiya hai usme vah ek protottype se dusre prototype se jod deta hai

let arbiataCoffi = Object.create(Coffi);
console.log(arbiataCoffi);

arbiataCoffi.taste = "bitter";
arbiataCoffi.drink();