function getStage() {
    if (stage == 1) {

    $('#textHed').text(
      'What 11 Years of Pedestrian and Cyclist Deaths in Toronto can tell us'
    );
    $('#textDesc').text(
        'The Toronto Police Service has recently updated their traffic related fatality numbers, which include all incidents and their attribute information between 2007 and 2017...'
    );

    $("#barHold").empty();

    $('ul').each(function(i) {
        console.log('i', i);
        // console.log('i', i);
        // $(this)
        $(this).css('color', timeColors[i]);
        $(this).children().css('color', timeColors[i]).text('FATAL');;
    });

  } else if (stage == 2) {
    $('#textHed').text(
      'Lighting'
    );
    $('#textDesc').text(
        'The majority of fatalities have occured during daylight. 180 of the 360 (50%) were documented with "Daylight" conditions.'
    );

    $("#barHold").empty();
    barChartArray = [];

    $('li').each(function() {
      barChartArray.push($(this).data('light'));
      let liElem = this;
      let liParent = $(liElem).parent();
      $(liParent).css('color', '#333');
      $(this).css ('color', 'rgba(0,0,0,0.2)');
      // console.log('time', $(this).data('light'));
      let lightText = ($(this).data('light')).slice(0, 9);
      $(this).text(lightText);

      $(this).css ('color', getDayLight($(this).data('light')));

    });

    console.log('barChartArray', barChartArray);

    buildBar('light',barChartArray);


  } else if (stage == 3) {
    $('#textHed').text(
      'Age group'
    );
    $('#textDesc').text(
        'Those over the age of 60 made up the greater part of those killed by cars.'
    );

    $("#barHold").empty();
    barChartArray = [];

    $('li').each(function() {
      // console.log('age', ($(this).data('age')));
      barChartArray.push($(this).data('age'));
      $(this).text($(this).data('age'));
      $(this).css('color', getColour($(this).data('age')));
    });

    buildBar('age',barChartArray);

  } else if (stage == 4) {

    $('#textHed').text(
      'Visibility'
    );
    $('#textDesc').text(
        'Lack of visibility, surprisingly, was unrelated to the majority of pedestrian deaths.'
    );

    $("#barHold").empty();
    barChartArray = [];

    $('li').each(function() {
      // console.log('vis', ($(this).data('vis')));
      barChartArray.push($(this).data('vis'));
      $(this).text($(this).data('vis'));
      $(this).css('color', 'rgba(0,0,0,1)');
      $(this).css('color', 'transparent');
      if ($(this).data('vis') == 'Clear') {
        $(this).css('color', 'rgba(255,255,255,1)');
        $(this).css('text-shadow', '0 0 5px rgba(255,255,255,0)');
      } else {
        $(this).css('color', 'rgba(255,255,255,0.2)');
        $(this).css('text-shadow', '0 0 5px rgba(255,255,255,0.2)');  
      }
    });


    buildBar('visibility', barChartArray);

  } else if (stage == 5) {

    $('#textHed').text(
      'Road Class'
    );
    $('#textDesc').text(
        'Major Arterial roadways are the most deadly road types for pedestrians.'
    );

    $('ul').each(function() {
      $(this).css('visibility', 'visible');
    });

    $("#barHold").empty();
    barChartArray = [];

    $('li').each(function() {
      barChartArray.push($(this).data('roadclass'));
      // console.log('age', ($(this).data('age')));
      let roadclassText = $(this).data('roadclass').slice(0, 9);
      $(this).text(roadclassText);
      $(this).css('color', getRoadClass($(this).data('roadclass')));
    });

    buildBar('roadclass', barChartArray);

    $('#streetviewImg').css('visibility', 'hidden');

  } else if (stage == 6) {

    $('#textHed').text(
      'Street view'
    );
    $('#textDesc').text(
        'Each image is a Google Streetview of the location where each of the 360 pedestrian or cyclist deaths occured in Toronto. Even though the downtown core sees the highest pedestrian traffic, more car-friendly intersections are clearly prominent in the streetview images.'
    );

    $('ul').each(function() {
      $(this).css('visibility', 'hidden');
    });

    $("#barHold").empty();

    $('#wardHold').css('visibility', 'hidden');
    // $('#wardHold').css('display', 'none');
    $('#streetviewHold').css('visibility', 'visible');
    $('#streetviewImg').css('visibility', 'visible');
    // $('#mapviewImg').css('visibility', 'hidden');
    // $('#mapviewImg').css('display', 'none');

  } else if (stage == 7) {

    $('#textHed').text(
      'Ask your city councillor what they are doing to prevent further unneccessary deaths in their ward.'
    );
    $('#textDesc').text(
        'Click on each ward to send an email to that councillor'
    );

    $('ul').each(function() {
      $(this).css('visibility', 'hidden');
    });

    $("#barHold").empty();

    $('#wardHold').css('visibility', 'visible');
    // $('#wardHold').css('display', 'block');
    $('#streetviewHold').css('visibility', 'hidden');
    $('#streetviewImg').css('visibility', 'hidden');
    // $('#streetviewHold').css('display', 'none');
  }
}



function buildBar(def, arr) {

  // console.log('def', def);
  // console.log('arr', arr);
    let counts = {};
    let countSort = [];

    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    };

    // var result = Object.keys(counts).map(function(key) {
    //   return [Number(key), counts[key]];
    // });

    // console.log('result', result);
    // countSort.push(counts);

    for (var stat in counts) {
        countSort.push([stat, counts[stat]]);
    }

    countSort.sort(function(a, b) {
        return b[1] - a[1];
    });


    // console.log('max', Math.max(counts));

    // console.log('sort soon');

    // countSort.sort(function (a, b) {
    //     console.log('val', a.val);
    //     console.log('a', a);
    //     console.log('b', b);
    //     return a.val.localeCompare( b.val );
    // });

    



    console.log('counts', counts);
    console.log('count sort', countSort);
    console.log('count sort', countSort[0]);

    // $.each( countSort,function(key, val) {
      // console.log('d', d[0]);
      // console.log('key', key);
      // console.log('key', val);

    countSort.forEach(function(val) {
      // console.log('key', key);
      console.log('val', val);

      let countObj = Object.values(counts);
      let countMax = Math.max(...countObj);
    // })

      let barWidth = val[1]/countMax*100 + '%';
      // console.log('barWidth', barWidth);

      if (def == 'light') {
        $('<p />').text(val[0]).appendTo("#barHold");
        $('<span />', {
        "class": 'bar'
        }).css('width', barWidth).css('background-color', getDayLight(val[0])).appendTo("#barHold");
      } else if (def == 'age') {
        $('<p />').text(val[0]).appendTo("#barHold");
        $('<span />', {
        "class": 'bar'
        }).css('width', barWidth).css('background-color', getColour(val[0])).appendTo("#barHold");
      } else if (def == 'visibility') {
        $('<p />').text(val[0]).appendTo("#barHold");
        $('<span />', {
        "class": 'bar'
        }).css('width', barWidth).css('background-color', getRoadClass(val[0])).appendTo("#barHold");
      } else if (def == 'roadclass') {
        $('<p />').text(val[0]).appendTo("#barHold");
        $('<span />', {
        "class": 'bar'
        }).css('width', barWidth).css('background-color', getRoadClass(val[0])).appendTo("#barHold");
      }

      // $('<p />').text(key).appendTo("#barHold");
      // $('<span />', {
      //   "class": 'bar'
      //   }).css('width', barWidth).css('background-color', getColour(key)).appendTo("#barHold");


    });
}



function getColour(d) {
  return d == '5 to 9' ? '#edf8e9' :
        d == '10 to 14' ? '#edf8e9' :
        d == '15 to 19' ? '#edf8e9' :
        d == '20 to 24' ? '#edf8e9' :
        d == '25 to 29' ? '#bae4b3' :
        d == '30 to 34' ? '#bae4b3' :
        d == '35 to 39' ? '#bae4b3' :
        d == '40 to 44' ? '#bae4b3' :
        d == '45 to 49' ? '#74c476' :
        d == '50 to 54' ? '#74c476' :
        d == '55 to 59' ? '#74c476' :
        d == '60 to 64' ? '#74c476' :
        d == '65 to 69' ? '#31a354' :
        d == '70 to 74' ? '#31a354' :
        d == '75 to 79' ? '#31a354' :
        d == '80 to 84' ? '#31a354' :
        d == '85 to 89' ? '#006d2c' :
        d == '90 to 94' ? '#006d2c' :
        d == 'Over 95' ? '#006d2c' :
                        '#d3d3d3';

}


function getRoadClass(d) {
return d == 'Expressway' ? '#feebe2' :
       d == 'Major Arterial' ? '#fbb4b9' :
       d == 'Minor Arterial' ? '#f768a1' :
       d == 'Collector' ? '#c51b8a' :
       d == 'Local' ? '#7a0177' :
                      '#d3d3d3';
}

function getDayLight(d) {
return d == 'Dark' ? '#333' :
       d == 'Dark, artificial' ? '#333' :
       d == 'Dawn' ? '#E2E290' :
       d == 'Dawn, artificial' ? '#E2E290' :
       d == 'Daylight' ? '#FFF' :
       d == 'Daylight, artificial' ? '#FFF' :
       d == 'Dusk' ? '#E6A45A' :
       d == 'Dusk, artificial' ? '#E6A45A' :
                              '#d3d3d3';
}