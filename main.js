var updated_images = ["https://i.postimg.cc/MGn9GJXw/family.jpg" ,
                 "https://i.postimg.cc/qqyYvVbq/grandpa.jpg" ,
                 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
                 "https://i.postimg.cc/bw5W5zSK/mother.jpg" ,
                 "https://i.postimg.cc/5ymDKL83/bro.jpg" ,
                 "https://i.postimg.cc/JnL6wtrd/sister.jpg" ];

var updated_names = ["Family Book", "Gyan Singh", "Narendra Pal Singh",
 "Suman Singh", "Jaideep Singh", "Manshi Singh"];

 var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updated_images = ["https://i.postimg.cc/MGn9GJXw/family.jpg" ,
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg" ,
    "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
    "https://i.postimg.cc/bw5W5zSK/mother.jpg" ,
    "https://i.postimg.cc/5ymDKL83/bro.jpg" ,
    "https://i.postimg.cc/JnL6wtrd/sister.jpg"[i]];
    
    var updated_names = ["Family Book", "Gyan Singh", "Narendra Pal Singh",
    "Suman Singh", "Jaideep Singh", "Manshi Singh"[i]] ;
 
    document.getElementById("family_member_image").src =  updated_images;
    document.getElementById("family_member_name").innerHTML = updated_names ;
}