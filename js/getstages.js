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
      let lightText = ($(this).data('light')).slice(0, 9);
      $(this).text(lightText);

      $(this).css ('color', getDayLight($(this).data('light')));

    });

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

    // $('#wardHold').css('visibility', 'hidden');
    // $('#wardHold').css('display', 'none');
    // $('#wardHold').css('display', 'none');
    $('#streetviewHold').css('visibility', 'visible');
    $('#streetviewImg').css('visibility', 'visible');
    // $('#mapviewImg').css('visibility', 'hidden');
    // $('#mapviewImg').css('display', 'none');
    $('#rplot1').css('opacity', 0);
    $('#rplotNote').css('visibility', 'hidden');

  } else if (stage == 7) {
    $('#textHed').text(
      'Vehicle traffic across the city'
    );
    $('#textDesc').text(
        'Each dot in the chart represents the percentage of all car traffic over an 8-hour period within every 100m buffer eminating from Bay St. and King St. The line represents the underlying pattern of this data.'
    );

    $('#rplotNote').css('visibility', 'visible');
    $('#rplot1').css('opacity', 1);
    $('#rplot2').css('opacity', 0);
    $('#streetviewHold').css('visibility', 'hidden');
    $('#streetviewImg').css('visibility', 'hidden');
    
  } else if (stage == 8) {
    $('#textHed').text(
      'Pedestrian traffic across the city'
    );
    $('#textDesc').text(
        'Pedestrian traffic is highly concentrated in the downtown core.'
    );

    // $('#rplot1').css('opacity', 0);
    $('#rplot2').css('opacity', 1);
    $('#rplot3').css('opacity', 0);
    
  } else if (stage == 9) {
    $('#textHed').text(
      'Percentage of every killed or seriously injured occurence (2007-2017)'
    );
    $('#textDesc').text(
        'By 100m intervals eminating from Bay st. and King st.'
    );

    $('#rplot1').css('opacity', 0);
    $('#rplot2').css('opacity', 0);
    $('#rplot3').css('opacity', 1);
    $('#rplot4').css('opacity', 0);
    
  } else if (stage == 10) {
    $('#textHed').text(
      'As pedestrian and vehicle traffic changes...'
    );
    $('#textDesc').text(
        ''
    );

    $('#rplot3').css('opacity', 0);
    $('#rplot4').css('opacity', 1);
    $('#rplot5').css('opacity', 0);
    
  } else if (stage == 11) {
    $('#textHed').text(
      '...the percentage of killed or seriously injured victims flatlines.'
    );
    $('#textDesc').text(
        'Even as pedestrian traffic decreases, those killed or seriously injured remains almost the same as the heavily populated downtown core.'
    );

    $('#rplot4').css('opacity', 0);
    $('#rplot5').css('opacity', 1);
    $('#rplot3').css('opacity', 0.5);
    
  } else if (stage == 12) {
    $('#textHed').text(
      'There is a noticable pattern'
    );
    $('#textDesc').text(
        'Older people on less pedestrian friendly roadways are more likely to get killed or seriously injured by a car. Regardless of visibility, road design and speed are clearly a factor in reducing the amount of victims.'
    );

    $('#rplot4').css('opacity', 1);
    $('#rplot5').css('opacity', 0);
    $('#rplot3').css('opacity', 1);

    $('#wardHold').css('opacity', 0);
    $('#wardHold').css('pointer-events', 'none');

    $('#rplotNote').css('visibility', 'visible');
    
  } else if (stage == 13) {
    $('#textHed').text(
      ''
    );
    $('#textDesc').text(
         ''
    );

    $('#wardHold').css('opacity', 1);
    $('#wardHold').css('pointer-events', 'inherit');

    $('#rplot4').css('opacity', 0);
    $('#rplot3').css('opacity', 0);
    $('#rplotNote').css('visibility', 'hidden');
    
  } else {
    return false;
  }
}

    // $('#textHed').text(
    //   'Ask your city councillor what they are doing to prevent further unneccessary deaths in their ward.'
    // );
    // $('#textDesc').text(
    //     'Click on each ward to send an email to that councillor'
    // );

    // $('ul').each(function() {
    //   $(this).css('visibility', 'hidden');
    // });

    // $("#barHold").empty();

    // $('#wardHold').css('visibility', 'visible');
    // $('#wardHold').css('display', 'block');
    // // $('#wardHold').css('display', 'block');
    // $('#streetviewHold').css('visibility', 'hidden');
    // $('#streetviewImg').css('visibility', 'hidden');
    // // $('#streetviewHold').css('display', 'none');



function buildBar(def, arr) {

  // console.log('def', def);
  // console.log('arr', arr);
    let counts = {};
    let countSort = [];

    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    };

    for (var stat in counts) {
        countSort.push([stat, counts[stat]]);
    }

    countSort.sort(function(a, b) {
        return b[1] - a[1];
    });


    countSort.forEach(function(val) {
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
