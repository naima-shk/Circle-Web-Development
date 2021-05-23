function Traffic(){
    let color=prompt('What is the color?');
    //console.log(color1);
    if (color =='red') {
    return alert('this is red traffic light');
    } else if (color == 'yellow'){
        return alert('this is yellow traffic light');
    } else if(color == 'blue') {
      return   alert('this is blue traffic light');
    }  else {
        return   alert('this is black traffic light');
    }
}