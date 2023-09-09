function showInput(){


    var contactNo = document.getElementById("CONTACT NO.").value;
    
    
    var pattern1=/^[\d]{10}$/gm
    
    
    if(pattern1.test(contactNo)) 
    {
        alert("Valid contact no");
    }
    
    
    else 
    {
        alert("Invalid contact no");
    }
    document.showInput();
    }