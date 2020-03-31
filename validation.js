// validation script here
const inputs = document.querySelectorAll("input");

const pattern={
	telephone: /^\d{10}$/,
	username: /^[a-z\d]{5,10}$/
};

function validation(field,regex){
   if(regex.test(field.value)){
   	field.className="valid";
   }
   else{
   	field.className="invalid";
   }
}


inputs.forEach((input)=>{
	input.addEventListener("keyup",(e)=>{
      // console.log(e.target.attributes.name.value);
	   validation(e.target,pattern[e.target.attributes.name.value])
	});
});