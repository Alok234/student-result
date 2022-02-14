var student=[
    {   
        roll:01,
        name:"Alok ",
        marks:{
            Bangla:40,
            English:38,
            Math:48,
            Science:45,
            ReligiousStudy:39
 
        }
        
    },
    {   
        roll:02,
        name:" Faysal ",
        marks:{
            Bangla:80,
            English:68,
            Math:78,
            Science:85,
            ReligiousStudy:79
 
        }
        
    },
    {   
        roll:3,
        name:"Rahim ",
        marks:{
            Bangla:20,
            English:38,
            Math:28,
            Science:35,
            ReligiousStudy:59
 
        }
        
    },
    {   
        roll:4,
        name:"Karim",
        marks:{
            Bangla:80,
            English:68,
            Math:98,
            Science:85,
            ReligiousStudy:82
 
        }
        
    },
    {   
        roll:5,
        name:"Shuvo",
        marks:{
            Bangla:80,
            English:88,
            Math:88,
            Science:85,
            ReligiousStudy:89
 
        }
        
        
    },
    {   
        roll:6,
        name:"Shamiul",
        marks:{
            Bangla:60,
            English:78,
            Math:88,
            Science:65,
            ReligiousStudy:59
 
        }
        
        
    },
    {   
        roll:7,
        name:"Mizanur",
        marks:{
            Bangla:70,
            English:68,
            Math:82,
            Science:82,
            ReligiousStudy:74
 
        }
        
        
    },
    {   
        roll:8,
        name:"Bhadhon",
        marks:{
            Bangla:80,
            English:88,
            Math:98,
            Science:95,
            ReligiousStudy:79
 
        }
        
        
    },
      {   
        roll:9,
        name:"Shuvsumon",
        marks:{
            Bangla:80,
            English:88,
            Math:88,
            Science:85,
            ReligiousStudy:89
 
        }
 
    },
        {   
            roll:10,
            name:"Ashik",
            marks:{
                Bangla:40,
                English:48,
                Math:68,
                Science:57,
                ReligiousStudy:20
    
            }
            
            
        }
        
        
    
    
    
 ]
 
 
 //   console.log(student.map({student}))
 
 
 //   const allSubject= student.map(function(subjects){
 
 //    // console.log(subjects);
          
 //    return `${(subjects.marks.Bangla)+(subjects.marks.English)}`;
 
 //   });
 //   console.log(allSubject[9]);
 
 var fail = [];
 var aPlus = [];
 var a = [];
 var b = [];
 var c = [];
 var d = [];
 
 
 
 // ####### Roll : 1
 
 var result= ((student[0].marks.Bangla)+(student[0].marks.English)+(student[0].marks.Math)+(student[0].marks.ReligiousStudy)+(student[0].marks.Science));
 
 if ((result/5)>=80) {
     aPlus.push(student[0].name)
    
 }else if ((result/5)>=70) {
    a.push(student[0].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[0].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[0].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[0].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[0].name)
   
 }
 
 
 
 // ########## No 2
 
 var result= ((student[1].marks.Bangla)+(student[1].marks.English)+(student[1].marks.Math)+(student[1].marks.ReligiousStudy)+(student[1].marks.Science));
 if ((result/5)>=80) {
     aPlus.push(student[1].name)
    
 }else if ((result/5)>=70) {
    a.push(student[1].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[1].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[1].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[1].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[1].name)
   
 }
 
 
 // ######### No 3
 
 
 var result= ((student[2].marks.Bangla)+(student[2].marks.English)+(student[2].marks.Math)+(student[2].marks.ReligiousStudy)+(student[2].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[0].name)
    
 }else if ((result/5)>=70) {
    a.push(student[2].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[2].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[2].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[2].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[2].name)
   
 }
 
 
 
 // ##### No 3
 
 
 var result= ((student[3].marks.Bangla)+(student[3].marks.English)+(student[3].marks.Math)+(student[3].marks.ReligiousStudy)+(student[3].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[3].name)
    
 }else if ((result/5)>=70) {
    a.push(student[3].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[3].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[3].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[3].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[3].name)
   
 }
 
 
 
 // ###### No 4
 
 
 var result= ((student[4].marks.Bangla)+(student[4].marks.English)+(student[4].marks.Math)+(student[4].marks.ReligiousStudy)+(student[4].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[4].name)
    
 }else if ((result/5)>=70) {
    a.push(student[4].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[4].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[4].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[4].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[4].name)
   
 }
 
 
 // ########## No 5
 
 
 
 var result= ((student[5].marks.Bangla)+(student[5].marks.English)+(student[5].marks.Math)+(student[5].marks.ReligiousStudy)+(student[5].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[5].name)
    
 }else if ((result/5)>=70) {
    a.push(student[5].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[5].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[5].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[5].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[5].name)
   
 }
 
 
 // ######## No 6
 
 
 var result= ((student[6].marks.Bangla)+(student[6].marks.English)+(student[6].marks.Math)+(student[6].marks.ReligiousStudy)+(student[6].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[6].name)
    
 }else if ((result/5)>=70) {
    a.push(student[6].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[6].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[6].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[6].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[6].name)
   
 }
 
 
 // ######## No 7
 
 
 var result= ((student[7].marks.Bangla)+(student[7].marks.English)+(student[7].marks.Math)+(student[7].marks.ReligiousStudy)+(student[7].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[7].name)
    
 }else if ((result/5)>=70) {
    a.push(student[7].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[7].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[7].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[7].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[7].name)
   
 }
 
 
 // ####### No 8
 
 
 
 var result= ((student[8].marks.Bangla)+(student[8].marks.English)+(student[8].marks.Math)+(student[8].marks.ReligiousStudy)+(student[8].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[8].name)
    
 }else if ((result/5)>=70) {
    a.push(student[8].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[8].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[8].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[8].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[8].name)
   
 }
 
 
 // ####### No 9
 
 
 
 var result= ((student[9].marks.Bangla)+(student[9].marks.English)+(student[9].marks.Math)+(student[9].marks.ReligiousStudy)+(student[9].marks.Science));
 
 
 if ((result/5)>=80) {
     aPlus.push(student[9].name)
    
 }else if ((result/5)>=70) {
    a.push(student[9].name)
   
 }
 else if ((result/5)>=55) {
    b.push(student[9].name)
   
 }
 else if ((result/5)>=45) {
    c.push(student[9].name)
   
 }
 else if ((result/5)>=33 ) {
    d.push(student[9].name)
   
 }
 else if (((result/5)<=33)) {
    fail.push(student[9].name)
   
 }
 
 
 
 // console.log(fail);
 // console.log(aPlus);
 // console.log(a);
 // console.log(b);
 // console.log(c);
 // console.log(d);
  
    
  
 
 
 console.log(` deleted`);
 console.log(`A+ = ${aPlus[0]} , ${aPlus[1]} , ${aPlus[2]}, ${aPlus[3]}`);
 console.log(`A = ${a[0]} , ${a[1]} , ${a[2]}`);
 console.log(`B = `);
 console.log(`C= ${c[0]} `)
 console.log(`D= ${d[0]} , ${d[1]} `)
 