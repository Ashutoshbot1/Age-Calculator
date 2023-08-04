const userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");

function calculateAge(){
    const birthDate=new Date(userInput.value);
    
    if(userInput.value===""){
        result.innerHTML=`<p style="color:orange">Please Select Valid Date</p>`
        return;
    }

    const d1=birthDate.getDate();
    const m1=birthDate.getMonth()+1;
    const y1=birthDate.getFullYear();


    const today=new Date();

    const d2=today.getDate();
    const m2=today.getMonth()+1;
    const y2=today.getFullYear();

    let y3,m3,d3;

    y3=y2-y1;
    
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=(m2-m1)+12;
    }

    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;

        if(m3<0){
            m3=11;
            y3--;
        }
    }

    result.innerHTML=`You Are <span>${y3}</span> Years  <span>${m3}</span> Months And <span>${d3}</span> Days Old`

    // console.log(d3,m3,y3);

}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}