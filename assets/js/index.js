const helloWorld = () => {
  console.log("Hello World");
  fetch("./assets/csvjson.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('item');

      div.innerHTML = `
      <div3 id=linhaAxis3 /div>
        <img src= "./assets/images/JPEG/${item['objectnbr'].replace('.jpeg', '.jpg')}" />
        <div id=linhaAxis /div>
        <div2 id=linhaAxis2 /div>
        
      `;

      const y = item['organization'];
      const x = item['state'];
      const z = item['collectivity'];

      const top = ((y - -100) * 100) / (100 - -100);
      const left = ((x - -100) * 100) / (100 - -100);
      const depth = (-1 * z * 100);

      const itemImage = div.querySelector('img');
      itemImage.style.top = top + '%';
      itemImage.style.left = left + '%';
      itemImage.style.transform = `translate(-${left}%, -${top}%)`;

      const itemAxis = div.querySelector('div');
      itemAxis.style.height = '100vh';
      itemAxis.style.width = '100vw';
      // itemAxis2.style.position = 'relative';
      // itemAxis2.style.display = 'flex';


      const itemAxis2 = div.querySelector('div2');
      itemAxis2.style.height = '100%';
      itemAxis2.style.width = '50%';
      
      const itemAxis3 = div.querySelector('div3');
      itemAxis3.style.height = '50%';
      itemAxis3.style.width = '100%';

      


      div.dataset.depth = depth;
      div.style.transform = `translateZ(${depth}px)`;

      

      document.querySelector('main').append(div);


       
      });


      // data.forEach((div) => {
      //   const linhaAxis = div.createElement('div');
      //   linhaAxis.classList.add('linhaAxis');
  
      //   linhaAxis.innerHTML = `
      //   <img src= "./assets/images/axis.png" />
      //   `;
  
        
  
      //   document.querySelector('item').append(linhaAxis);
         
      //   });
    });
    
    

    let totalDepth = 0; 
    let minDepth = -10000;
    let maxDepth = 8000;

    document.addEventListener( 'wheel', e => {
      let dScroll = e.deltaY;

      totalDepth += dScroll;
      if ( totalDepth <= minDepth ) {
        dScroll += minDepth - totalDepth;

        totalDepth = minDepth;
      }
      if ( totalDepth >= maxDepth ) {
        dScroll -= totalDepth - maxDepth;

        totalDepth = maxDepth;
      }

      const items = document.querySelectorAll( '.item' );

      items.forEach( item => {
        let depth = parseInt(item.dataset.depth);
        depth += dScroll;

        item.style.transform = `translateZ(${item.dataset.depth}px)`;
        item.dataset.depth = depth
      } );  

      

      const scrollPercentage = -1 * ( totalDepth - minDepth ) / ( minDepth - maxDepth );
      document.body.style.backgroundColor = 'rgb(' + ( (scrollPercentage * 100) + 170 ) + ', ' + ( (scrollPercentage * 100) + 170 ) + ', ' + ( (scrollPercentage * 100) + 170 ) + ')';
      console.log (scrollPercentage);
    })

    // document.querySelector(div).append('<div id="axis"/>');


    // let transform = 0;
    // document.addEventListener('wheel', (e) => {
    //   transform += e.deltaY;
    //   document.querySelector('main').style.transform = `translateZ(${transform}px)`;
    // })

};

helloWorld();




// const dataSet = () => {

//   fetch("./assets/csvjson.json")

//   .then((response) => response.json())

//   .then((data) => {



//       data.forEach(item => {



//           const div = document.createElement("div");

//           div.classList.add('item');



//           const img = document.createElement("img");    

//           img.src = "./assets/images/" + item.objectnbr;



//       });

//   });

// }