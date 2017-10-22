var fails = 2;
var success = 2;

// CHANGE THE SIZE OF THE BUTTON ON HOVER
$(function() {

    loadin();

	$('#addItem').mouseenter(function()
	{
		$('#addItem').animate({height: '50px', width: '50px', lineHeight: '45px'}, "fast");
	});

	$('#addItem').mouseleave(function()
	{
		$('#addItem').animate({height: '45px', width: '45px', lineHeight: '40px'}, "fast");
	});

});

// New Item is clicked
$('#newItem').click(function() {

	var items1 = new Array();
	items1 = JSON.parse(localStorage.getItem('entries'));

	// Transer values to variables
	var Description = $('#description').val();

	//formats date to be MMM abbreviation + day
	var Day = $('#date').val();
	var myDate = Day
	myDate = myDate.substring(5);
	var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
	var month = months[parseInt(myDate.substring(0,2))];
	myDate = month + " " + myDate.substring(3);

	//formats time to be 12 hour AM/PM
	var Time = $('#time').val();
	var myTime = Time;//mytime used to disp time used for calculations
	var hours = parseInt(Time.substring(0,2))
	if (hours > 12)
	{
		hours -= 12;
		myTime = hours + Time.substring(2) + " PM";
	}
	else {
	myTime += " AM";
	}
	//entries[entries.length]={desc:Description, monthday:Day, clock:Time};

	var entry = new Object();

	entry.desc = Description;
	entry.monthday = Day;
	entry.clock = Time;

	items1.push(entry);

	var entry = new Object();
	entry.desc = Description;
	entry.monthday = Day;
	entry.clock = Time;

	for(var i = 0; i<items1.length;i++)
	{
		console.log(items1[i]);
	}

	// Add values to table
    $('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + Description + "</td><td>"+ myDate + "</td><td>" + myTime + "</td><td>" + "<button type='button' class='btn btn-success pull-right' id='clear'>Clear</button><button type='button' class='btn btn-success pull-right' id='complete'>Complete</button>" + "</td><tr>");

	// Reset form
	$('#form')[0].reset();
	localStorage.setItem('entries', JSON.stringify(items1));
	localStorage.setItem('itemsTable', itemsTable);

});

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

function loadin()
{

	var entries = new Array();

	//Get current time
	var curday = new Date().getDate();
	var curmonth = new Date().getMonth()+1;
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();

	//get stored variable

	entries = JSON.parse(localStorage.getItem('entries'));
	localStorage.setItem('entries', JSON.stringify(entries));


// console.log(entries);

	//loop through each entry
	for(var i= 0; i<entries.length;i++)
	{
		//get the string of the entered month until the slash and compare that to the current month. If it is lower the entry is removed
    // console.log(parseInt(entries[i].monthday.slice(5,7)));
    // console.log(entries[i].monthday);
    // console.log(curmonth);
		if(parseInt(entries[i].monthday.slice(5,7))<curmonth.valueOf())
		{

			remove(entries,entries[i]);
			fails++;

		}

  else  if(parseInt(entries[i].monthday.slice(5,7))==curmonth.valueOf())
    {

		//if the month is equal the day needs to be checked

			//get the day by substringing the entered date after the /. compare to current day and if the entered is lower delete the entry
      // console.log(parseInt(entries[i].monthday.slice(8)));
      // console.log(curday);
			if(parseInt(entries[i].monthday.slice(8))<curday.valueOf())
			{
				remove(entries,entries[i]);
				fails++;

			}

      else if(parseInt(entries[i].monthday.slice(8))==curday.valueOf())
      {
        // console.log(entries[i].clock.slice(0,2));
        // console.log(hours);
        if(parseInt(entries[i].clock.slice(0,2))<hours.valueOf())
				{
						remove(entries,entries[i]);
						fails++;

				}

        else if(parseInt(entries[i].clock.slice(0,2))==hours.valueOf())
        {
          // console.log(entries[i].clock.slice(3));
          // console.log(minutes);
          if (parseInt(entries[i].clock.slice(3))<=minutes.valueOf()) {


							remove(entries,entries[i]);
							fails++;

					}
        }
      }
			//if the days are equal time needs to be checked

				//hours is gotten by substringing the time until the :. Then compared to current time and if lower removed. if equal do for minutes



					}
				}

localStorage.setItem('entries', JSON.stringify(entries));



	//reprint the table
	for(var i= 0; i<entries.length;i++)
	{
		$('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + entries[i].desc + "</td><td>" + entries[i].monthday + "</td><td>" + entries[i].clock + "</td><td>" + "<button type='button' class='btn btn-success pull-right' id='clear'>Clear</button><button type='button' class='btn btn-success pull-right' id='complete'>Complete</button>" + "</td><tr>");
	}

}

// //function move() {
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//             elem.innerHTML = width * 1 + '%';
//         }
//     }
// }

//Progress bar

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var hey, presets, simpleStr, wrap, slice$ = [].slice, toString$ = {}.toString;
hey = require('./my-module').hey;
presets = require('presets').presets;
simpleStr = function(arr){
  return arr.join('');
};
wrap = function(content){
  return "data:image/svg+xml;base64," + btoa(content);
};
(function(){
  var make, handler, ldBar;
  make = {
    head: function(viewBox){
      return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
    },
    gradient: function(dir, dur){
      var colors, ret, len, gx, gy, x, y, i$, i, idx;
      dir == null && (dir = 45);
      dur == null && (dur = 1);
      colors = slice$.call(arguments, 2);
      ret = [this.head("0 0 100 100")];
      len = colors.length * 4 + 1;
      dir = dir * Math.PI / 180;
      gx = Math.pow(Math.cos(dir), 2);
      gy = Math.sqrt(gx - Math.pow(gx, 2));
      if (dir > Math.PI * 0.25) {
        gy = Math.pow(Math.sin(dir), 2);
        gx = Math.sqrt(gy - Math.pow(gy, 2));
      }
      x = gx * 100;
      y = gy * 100;
      ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");
      for (i$ = 0; i$ < len; ++i$) {
        i = i$;
        idx = i * 100 / (len - 1);
        ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
      }
      ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
      return wrap(ret.join(""));
    },
    stripe: function(c1, c2, dur){
      var ret, i;
      c1 == null && (c1 = '#b4b4b4');
      c2 == null && (c2 = '#e6e6e6');
      dur == null && (dur = 1);
      ret = [this.head("0 0 100 100")];
      ret = ret.concat([
        "<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>", "<g><g>", (function(){
          var i$, results$ = [];
          for (i$ = 0; i$ < 13; ++i$) {
            i = i$;
            results$.push(("<polygon fill=\"" + c1 + "\" ") + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
          }
          return results$;
        }()).join(""), "</g><animateTransform attributeName=\"transform\" type=\"translate\" ", "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"
      ].join(""));
      return wrap(ret);
    },
    bubble: function(c1, c2, count, dur, size, sw){
      var ret, i$, i, idx, x, r, d;
      c1 == null && (c1 = '#39d');
      c2 == null && (c2 = '#9cf');
      count == null && (count = 15);
      dur == null && (dur = 1);
      size == null && (size = 6);
      sw == null && (sw = 1);
      ret = [this.head("0 0 200 200"), "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"];
      for (i$ = 0; i$ < count; ++i$) {
        i = i$;
        idx = -(i / count) * dur;
        x = Math.random() * 184 + 8;
        r = (Math.random() * 0.7 + 0.3) * size;
        d = dur * (1 + Math.random() * 0.5);
        ret.push(["<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>", "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>"].join(""));
      }
      return wrap(ret.join("") + "</svg>");
    }
  };
  handler = {
    queue: {},
    running: false,
    main: function(timestamp){
      var keepon, removed, k, ref$, func, ret, this$ = this;
      keepon = false;
      removed = [];
      for (k in ref$ = this.queue) {
        func = ref$[k];
        ret = func(timestamp);
        if (!ret) {
          removed.push(func);
        }
        keepon = keepon || ret;
      }
      for (k in ref$ = this.queue) {
        func = ref$[k];
        if (removed.indexOf(func) >= 0) {
          delete this.queue[k];
        }
      }
      if (keepon) {
        return requestAnimationFrame(function(it){
          return this$.main(it);
        });
      } else {
        return this.running = false;
      }
    },
    add: function(key, f){
      var this$ = this;
      if (!this.queue[key]) {
        this.queue[key] = f;
      }
      if (!this.running) {
        this.running = true;
        return requestAnimationFrame(function(it){
          return this$.main(it);
        });
      }
    }
  };
  window.ldBar = ldBar = function(selector, option){
    var xmlns, root, cls, idPrefix, id, domTree, newNode, x$, config, attr, that, isStroke, parseRes, dom, svg, text, group, length, path0, path1, patimg, img, ret, size, this$ = this;
    option == null && (option = {});
    xmlns = {
      xlink: "http://www.w3.org/1999/xlink"
    };
    root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;
    if (!root.ldBar) {
      root.ldBar = this;
    }
    cls = root.getAttribute('class') || '';
    if (!~cls.indexOf('ldBar')) {
      root.setAttribute('class', cls + " ldBar");
    }
    idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
    id = {
      key: idPrefix,
      clip: idPrefix + "-clip",
      filter: idPrefix + "-filter",
      pattern: idPrefix + "-pattern",
      mask: idPrefix + "-mask",
      maskPath: idPrefix + "-mask-path"
    };
    domTree = function(n, o){
      var k, v;
      n = newNode(n);
      for (k in o) {
        v = o[k];
        if (k !== 'attr') {
          n.appendChild(domTree(k, v || {}));
        }
      }
      n.attrs(o.attr || {});
      return n;
    };
    newNode = function(n){
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    };
    x$ = document.body.__proto__.__proto__.__proto__;
    x$.text = function(t){
      return this.appendChild(document.createTextNode(t));
    };
    x$.attrs = function(o){
      var k, v, ret, results$ = [];
      for (k in o) {
        v = o[k];
        ret = /([^:]+):([^:]+)/.exec(k);
        if (!ret || !xmlns[ret[1]]) {
          results$.push(this.setAttribute(k, v));
        } else {
          results$.push(this.setAttributeNS(xmlns[ret[1]], k, v));
        }
      }
      return results$;
    };
    x$.styles = function(o){
      var k, v, results$ = [];
      for (k in o) {
        v = o[k];
        results$.push(this.style[k] = v);
      }
      return results$;
    };
    x$.append = function(n){
      var r;
      return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
    };
    x$.attr = function(n, v){
      if (v != null) {
        return this.setAttribute(n, v);
      } else {
        return this.getAttribute(n);
      }
    };
    config = {
      "type": 'stroke',
      "img": '',
      "path": 'M10 10L90 10',
      "fill-dir": 'btt',
      "fill": '#25b',
      "fill-background": '#ddd',
      "fill-background-extrude": 3,
      "pattern-size": null,
      "stroke-dir": 'normal',
      "stroke": '#25b',
      "stroke-width": '3',
      "stroke-trail": '#ddd',
      "stroke-trail-width": .5,
      "duration": 1,
      "easing": 'linear',
      "value": 0,
      "img-size": null
    };
    config["preset"] = root.attr("data-preset") || option["preset"];
    if (config.preset != null) {
      import$(config, presets[config.preset]);
    }
    for (attr in config) {
      if (that = that = root.attr("data-" + attr)) {
        config[attr] = that;
      }
    }
    import$(config, option);
    if (config.img) {
      config.path = null;
    }
    isStroke = config.type === 'stroke';
    parseRes = function(v){
      var parser, ret;
      parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
      ret = parser.exec(v);
      if (!ret) {
        return v;
      }
      return ret = make[ret[1]].apply(make, ret[2].split(','));
    };
    config.fill = parseRes(config.fill);
    config.stroke = parseRes(config.stroke);
    dom = {
      attr: {
        "xmlns:xlink": 'http://www.w3.org/1999/xlink',
        preserveAspectRatio: 'xMidYMid',
        width: "100%",
        height: "100%"
      },
      defs: {
        filter: {
          attr: {
            id: id.filter,
            x: -1,
            y: -1,
            width: 3,
            height: 3
          },
          feMorphology: {
            attr: {
              operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
              radius: Math.abs(+config["fill-background-extrude"])
            }
          },
          feColorMatrix: {
            attr: {
              values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
              result: "cm"
            }
          }
        },
        mask: {
          attr: {
            id: id.mask
          },
          image: {
            attr: {
              "xlink:href": config.img,
              filter: "url(#" + id.filter + ")",
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              preserveAspectRatio: "xMidYMid"
            }
          }
        },
        g: {
          mask: {
            attr: {
              id: id.maskPath
            },
            path: {
              attr: {
                d: config.path || "",
                fill: '#fff',
                stroke: '#fff',
                filter: "url(#" + id.filter + ")"
              }
            }
          }
        },
        clipPath: {
          attr: {
            id: id.clip
          },
          rect: {
            attr: {
              'class': 'mask',
              fill: '#000'
            }
          }
        },
        pattern: {
          attr: {
            id: id.pattern,
            patternUnits: 'userSpaceOnUse',
            x: 0,
            y: 0,
            width: 300,
            height: 300
          },
          image: {
            attr: {
              x: 0,
              y: 0,
              width: 300,
              height: 300
            }
          }
        }
      }
    };
    svg = domTree('svg', dom);
    text = document.createElement('div');
    text.setAttribute('class', 'ldBar-label');
    root.appendChild(svg);
    root.appendChild(text);
    group = [0, 0];
    length = 0;
    this.fit = function(){
      var box, d, rect;
      box = group[1].getBBox();
      d = Math.max.apply(null, ['stroke-width', 'stroke-trail-width', 'fill-background-extrude'].map(function(it){
        return config[it];
      })) * 1.5;
      svg.attrs({
        viewBox: [box.x - d, box.y - d, box.width + d * 2, box.height + d * 2].join(" ")
      });
      if (!root.style.width) {
        root.styles({
          width: (box.width + d * 2) + "px"
        });
      }
      if (!root.style.height) {
        root.styles({
          height: (box.height + d * 2) + "px"
        });
      }
      rect = group[0].querySelector('rect');
      if (rect) {
        return rect.attrs({
          x: box.x - d,
          y: box.y - d,
          width: box.width + d * 2,
          height: box.height + d * 2
        });
      }
    };
    if (config.path) {
      if (isStroke) {
        group[0] = domTree('g', {
          path: {
            attr: {
              d: config.path,
              fill: 'none',
              'class': 'baseline'
            }
          }
        });
      } else {
        group[0] = domTree('g', {
          rect: {
            attr: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              mask: "url(#" + id.maskPath + ")",
              fill: config["fill-background"],
              'class': 'frame'
            }
          }
        });
      }
      svg.appendChild(group[0]);
      group[1] = domTree('g', {
        path: {
          attr: {
            d: config.path,
            'class': isStroke ? 'mainline' : 'solid',
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
          }
        }
      });
      svg.appendChild(group[1]);
      path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
      path1 = group[1].querySelector('path');
      if (isStroke) {
        path1.attrs({
          fill: 'none'
        });
      }
      patimg = svg.querySelector('pattern image');
      img = new Image();
      img.addEventListener('load', function(){
        var box, that;
        box = (that = config["pattern-size"])
          ? {
            width: +that,
            height: +that
          }
          : img.width && img.height
            ? {
              width: img.width,
              height: img.height
            }
            : {
              width: 300,
              height: 300
            };
        svg.querySelector('pattern').attrs({
          width: box.width,
          height: box.height
        });
        return patimg.attrs({
          width: box.width,
          height: box.height
        });
      });
      if (/.+\..+|^data:/.exec(!isStroke
        ? config.fill
        : config.stroke)) {
        img.src = !isStroke
          ? config.fill
          : config.stroke;
        patimg.attrs({
          "xlink:href": img.src
        });
      }
      if (isStroke) {
        path0.attrs({
          stroke: config["stroke-trail"],
          "stroke-width": config["stroke-trail-width"]
        });
        path1.attrs({
          "stroke-width": config["stroke-width"],
          stroke: /.+\..+|^data:/.exec(config.stroke)
            ? "url(#" + id.pattern + ")"
            : config.stroke
        });
      }
      if (config.fill && !isStroke) {
        path1.attrs({
          fill: /.+\..+|^data:/.exec(config.fill)
            ? "url(#" + id.pattern + ")"
            : config.fill
        });
      }
      length = path1.getTotalLength();
      this.fit();
      this.inited = true;
    } else if (config.img) {
      if (config["img-size"]) {
        ret = config["img-size"].split(',');
        size = {
          width: +ret[0],
          height: +ret[1]
        };
      } else {
        size = {
          width: 100,
          height: 100
        };
      }
      group[0] = domTree('g', {
        rect: {
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            mask: "url(#" + id.mask + ")",
            fill: config["fill-background"]
          }
        }
      });
      svg.querySelector('mask image').attrs({
        width: size.width,
        height: size.height
      });
      group[1] = domTree('g', {
        image: {
          attr: {
            width: size.width,
            height: size.height,
            x: 0,
            y: 0,
            preserveAspectRatio: "xMidYMid",
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
            "xlink:href": config.img,
            'class': 'solid'
          }
        }
      });
      img = new Image();
      img.addEventListener('load', function(){
        var ret, size;
        if (config["img-size"]) {
          ret = config["img-size"].split(',');
          size = {
            width: +ret[0],
            height: +ret[1]
          };
        } else if (img.width && img.height) {
          size = {
            width: img.width,
            height: img.height
          };
        } else {
          size = {
            width: 100,
            height: 100
          };
        }
        svg.querySelector('mask image').attrs({
          width: size.width,
          height: size.height
        });
        group[1].querySelector('image').attrs({
          width: size.width,
          height: size.height
        });
        this$.fit();
        this$.set(undefined, false);
        return this$.inited = true;
      });
      img.src = config.img;
      svg.appendChild(group[0]);
      svg.appendChild(group[1]);
    }
    svg.attrs({
      width: '100%',
      height: '100%'
    });
    this.transition = {
      value: {
        src: 0,
        des: 0
      },
      time: {},
      ease: function(t, b, c, d){
        t = t / (d * 0.5);
        if (t < 1) {
          return c * 0.5 * t * t + b;
        }
        t = t - 1;
        return -c * 0.5 * (t * (t - 2) - 1) + b;
      },
      handler: function(time){
        var ref$, dv, dt, dur, v, node, style, box, dir;
        if (this.time.src == null) {
          this.time.src = time;
        }
        ref$ = [this.value.des - this.value.src, (time - this.time.src) * 0.001, +config["duration"] || 1], dv = ref$[0], dt = ref$[1], dur = ref$[2];
        text.textContent = v = Math.round(this.ease(dt, this.value.src, dv, dur));
        if (isStroke) {
          node = path1;
          style = {
            "stroke-dasharray": config["stroke-dir"] === 'reverse'
              ? "0 " + length * (100 - v) * 0.01 + " " + length * v * 0.01 + " 0"
              : v * 0.01 * length + " " + ((100 - v) * 0.01 * length + 1)
          };
        } else {
          box = group[1].getBBox();
          dir = config["fill-dir"];
          style = dir === 'btt' || !dir
            ? {
              y: box.y + box.height * (100 - v) * 0.01,
              height: box.height * v * 0.01,
              x: box.x,
              width: box.width
            }
            : dir === 'ttb'
              ? {
                y: box.y,
                height: box.height * v * 0.01,
                x: box.x,
                width: box.width
              }
              : dir === 'ltr'
                ? {
                  y: box.y,
                  height: box.height,
                  x: box.x,
                  width: box.width * v * 0.01
                }
                : dir === 'rtl' ? {
                  y: box.y,
                  height: box.height,
                  x: box.x + box.width * (100 - v) * 0.01,
                  width: box.width * v * 0.01
                } : void 8;
          node = svg.querySelector('rect');
        }
        node.attrs(style);
        if (dt >= dur) {
          delete this.time.src;
          return false;
        }
        return true;
      },
      start: function(src, des, doTransition){
        var ref$, this$ = this;
        ref$ = this.value;
        ref$.src = src;
        ref$.des = des;
        !!(root.offsetWidth || root.offsetHeight || root.getClientRects().length);
        if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
          this.time.src = 0;
          this.handler(1000);
          return;
        }
        return handler.add(id.key, function(time){
          return this$.handler(time);
        });
      }
    };
    this.set = function(v, doTransition){
      var src, des;
      doTransition == null && (doTransition = true);
      src = this.value || 0;
      if (v != null) {
        this.value = (success/(fails+success))*100;
      } else {
        v = this.value;
      }
      des = this.value;
      return this.transition.start(src, des, doTransition);
    };
    this.set(+config.value || 0, false);
    return this;
  };
  return window.addEventListener('load', function(){
    return Array.from(document.querySelectorAll('.ldBar')).forEach(function(it){
      if (!it.ldBar) {
        return it.ldBar = new ldBar(it);
      }
    });
  }, false);
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}



},{"./my-module":2,"presets":3}],2:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var hey, out$ = typeof exports != 'undefined' && exports || this;
out$.hey = hey = function(){
  return console.log("This is loading bar!");
};



},{}],3:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var presets, out$ = typeof exports != 'undefined' && exports || this;
out$.presets = presets = {
  rainbow: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)'
  },
  energy: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
    "fill-dir": "ltr",
    "fill-background": '#444',
    "fill-background-extrude": 1
  },
  stripe: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
    "fill-dir": "ltr",
    "fill-background": '#ddd',
    "fill-background-extrude": 1
  },
  text: {
    "type": 'fill',
    "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
    "fill-background-extrude": 1.3,
    "pattern-size": 100,
    "fill-dir": "ltr",
    "img-size": "70,20"
  },
  line: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": '#25b',
    "stroke-width": 3,
    "stroke-trail": '#ddd',
    "stroke-trail-width": 1
  },
//@ERWTRJTYHTMJRJRHRHFGSJFHJFGSJHFJSFJSFJSFGSJF
	fan: {
    "type": 'stroke',
    "path": 'M10 90A40 40 0 0 1 90 90',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke":'#ff0000',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 3
  },
  circle: {
    "type": 'stroke',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5
  },
  bubble: {
    "type": 'fill',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": 'data:ldbar/res,bubble(#39d,#cef)',
    "pattern-size": "150",
    "fill-background": '#ddd',
    "fill-background-extrude": 2,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5
  }
};



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGtpcmJ5L3dvcmtzcGFjZS96YnJ5aWt0L2xvYWRpbmcvcHJvamVjdHMvbG9hZGluZy1iYXIvc3JjL2xvYWRpbmctYmFyLmxzIiwiL1VzZXJzL3RraXJieS93b3Jrc3BhY2UvemJyeWlrdC9sb2FkaW5nL3Byb2plY3RzL2xvYWRpbmctYmFyL3NyYy9teS1tb2R1bGUubHMiLCIvVXNlcnMvdGtpcmJ5L3dvcmtzcGFjZS96YnJ5aWt0L2xvYWRpbmcvcHJvamVjdHMvbG9hZGluZy1iYXIvc3JjL3ByZXNldHMubHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0F5QixHQUFoQixDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLENBQWdCO0FBQ04sT0FBVixDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQVU7QUFFbkIsU0FBVyxDQUFBLENBQUEsQ0FBRSxRQUFBLENBQUEsR0FBQTtTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUE7O0FBQy9CLElBQUssQ0FBQSxDQUFBLENBQUUsUUFBQSxDQUFBLE9BQUE7U0FBeUMsNEJBQUMsQ0FBQSxDQUFBLENBQUUsSUFBRixDQUFPLE9BQUQ7O0FBRXZELENBQUcsUUFBQSxDQUFBLENBQUgsQ0FBQTtBQUFBLE1BQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO0FBQUEsRUFDSSxJQUFLLENBQUEsQ0FBQSxDQUNELENBRlI7QUFBQSxJQUVRLElBRlIsRUFFYyxRQUFBLENBQUEsT0FBQSxDQUZkLENBQUE7QUFBQSxNQUFBLE1BQUEsQ0FFMkIsMEdBQUEsQ0FBQSxDQUFBLENBRThDLE9BQUEsQ0FBQSxDQUFBLENBQUEsS0FKekUsQ0FBQTtBQUFBLElBQUEsQ0FBQSxDQUFBO0FBQUEsSUFPUSxRQVBSLEVBT2tCLFFBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQVBsQixDQUFBO0FBQUEsVUFBQSxNQUFB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Q0UsWUFBRTtJQUNOLFFBQUU7SUFDUyxtQkFBRTtJQUNNLDJCQUFFO0lBQ2YsY0FBRTtJQUNOLFVBQUU7SUFDSSxnQkFBRTtJQUNGLGdCQUFFO0lBQ0ksc0JBQUU7RUFWaEI7RUFXVixRQUNVO0lBQUEsUUFBRTtJQUNGLFFBQUU7SUFDRSxZQUFFO0lBQ04sUUFBRTtJQUNTLG1CQUFFO0lBQ00sMkJBQUU7SUFDZixjQUFFO0lBQ04sVUFBRTtJQUNJLGdCQUFFO0lBQ0YsZ0JBQUU7SUFDSSxzQkFBRTtFQVZoQjtFQVdWLFFBQ1U7SUFBQSxRQUFFO0lBQ0YsUUFBRTtJQUNFLFlBQUU7SUFDTixRQUFFO0lBQ00sZ0JBQU87SUFDSixtQkFBRTtJQUNNLDJCQUFFO0lBQ2YsY0FBRTtJQUNOLFVBQUU7SUFDSSxnQkFBRTtJQUNGLGdCQUFFO0lBQ0ksc0JBQUU7RUFYaEI7QUEzRFYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSEgJy4vbXktbW9kdWxlJzoge2hleX1cbnJlcXVpcmUhIHByZXNldHM6IHtwcmVzZXRzfVxuXG5zaW1wbGUtc3RyID0gKGFycikgLT4gYXJyLmpvaW4gJydcbndyYXAgPSAoY29udGVudCkgLT4gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShjb250ZW50KVxuXG5kbyAtPlxuICAgIG1ha2UgPVxuICAgICAgICBoZWFkOiAodmlld0JveCkgLT4gXCJcIlwiXG4gICAgICAgICAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiI3ZpZXdCb3hcIj5cbiAgICAgICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICBncmFkaWVudDogKGRpciA9IDQ1LCBkdXIgPSAxLCAuLi5jb2xvcnMpIC0+XG4gICAgICAgICAgICByZXQgPSBbQGhlYWQgXCIwIDAgMTAwIDEwMFwiXVxuICAgICAgICAgICAgbGVuID0gY29sb3JzLmxlbmd0aCAqIDQgKyAxXG4gICAgICAgICAgICBkaXIgPSBkaXIgKiBNYXRoLlBJIC8gMTgwXG4gICAgICAgICAgICBneCA9IE1hdGguY29zKGRpcikgKiogMlxuICAgICAgICAgICAgZ3kgPSBNYXRoLnNxcnQoZ3ggLSBneCAqKiAyKVxuICAgICAgICAgICAgaWYgZGlyID4gTWF0aC5QSSAqIDAuMjUgPT5cbiAgICAgICAgICAgICAgICBneSA9IE1hdGguc2luKGRpcikgKiogMlxuICAgICAgICAgICAgICAgIGd4ID0gTWF0aC5zcXJ0KGd5IC0gZ3kgKiogMilcbiAgICAgICAgICAgIHggPSBneCAqIDEwMFxuICAgICAgICAgICAgeSA9IGd5ICogMTAwXG4gICAgICAgICAgICByZXQucHVzaCBcIlwiXCI8ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMFwiIHgyPVwiI2d4XCIgeTE9XCIwXCIgeTI9XCIjZ3lcIj5cIlwiXCJcbiAgICAgICAgICAgIGZvciBpIGZyb20gMCB0aWwgbGVuID0+XG4gICAgICAgICAgICAgICAgaWR4ID0gaSAqIDEwMCAvIChsZW4gLSAxKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIjxzdG9wIG9mZnNldD1cIiN7aWR4fSVcIiBzdG9wLWNvbG9yPVwiI3tjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdfVwiLz5cIlwiXCJcbiAgICAgICAgICAgIHJldC5wdXNoIFwiXCJcIlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiIGZpbGw9XCJ1cmwoXFwjZ3JhZGllbnQpXCI+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiBmcm9tPVwiLSN4LC0jeVwiXG4gICAgICAgICAgICAgICAgdG89XCIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvcmVjdD48L3N2Zz5cbiAgICAgICAgICAgICAgICBcIlwiXCJcbiAgICAgICAgICAgIHdyYXAgcmV0LmpvaW4oXCJcIilcblxuICAgICAgICBzdHJpcGU6IChjMT1cXCNiNGI0YjQsIGMyPVxcI2U2ZTZlNiwgZHVyID0gMSkgLT5cbiAgICAgICAgICAgIHJldCA9IFtAaGVhZCBcIjAgMCAxMDAgMTAwXCJdXG4gICAgICAgICAgICByZXQgKys9IFtcbiAgICAgICAgICAgICAgICBcIlwiXCI8cmVjdCBmaWxsPVwiI2MyXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIi8+XCJcIlwiXG4gICAgICAgICAgICAgICAgXCJcIlwiPGc+PGc+XCJcIlwiXG4gICAgICAgICAgICAgICAgW1wiXCJcIjxwb2x5Z29uIGZpbGw9XCIjYzFcIiBcIlwiXCIgK1xuICAgICAgICAgICAgICAgICBcIlwiXCJwb2ludHM9XCIjey05MCArIGkgKiAyMH0sMTAwICN7LTEwMCArIGkgKiAyMH0sXCJcIlwiICtcbiAgICAgICAgICAgICAgICAgXCJcIlwiMTAwICN7LTYwICsgaSAqIDIwfSwwICN7LTUwICsgaSAqIDIwfSwwIFwiLz5cIlwiXCIgZm9yIGkgZnJvbSAwIHRpbCAxM10uam9pbihcIlwiKVxuICAgICAgICAgICAgICAgIFwiXCJcIjwvZz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIFwiXCJcIlxuICAgICAgICAgICAgICAgIFwiXCJcImZyb209XCIwLDBcIiB0bz1cIjIwLDBcIiBkdXI9XCIje2R1cn1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPjwvZz48L3N2Zz5cIlwiXCJcbiAgICAgICAgICAgIF0uam9pbihcIlwiKVxuICAgICAgICAgICAgd3JhcCByZXRcblxuICAgICAgICBidWJibGU6IChjMSA9IFxcIzM5ZCwgYzIgPSBcXCM5Y2YsIGNvdW50ID0gMTUsIGR1ciA9IDEsIHNpemUgPSA2LCBzdz0xKSAtPlxuICAgICAgICAgICAgcmV0ID0gW0BoZWFkKFwiMCAwIDIwMCAyMDBcIiksIFwiXCJcIjxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIGZpbGw9XCIjYzFcIi8+XCJcIlwiXVxuICAgICAgICAgICAgZm9yIGkgZnJvbSAwIHRpbCBjb3VudCA9PlxuICAgICAgICAgICAgICAgIGlkeCA9IC0oaSAvIGNvdW50KSAqIGR1clxuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJhbmRvbSEgKiAxODQgKyA4XG4gICAgICAgICAgICAgICAgciA9ICggTWF0aC5yYW5kb20hICogMC43ICsgMC4zICkgKiBzaXplXG4gICAgICAgICAgICAgICAgZCA9IGR1ciAqICgxICsgTWF0aC5yYW5kb20hICogMC41KVxuICAgICAgICAgICAgICAgIHJldC5wdXNoIFtcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMTkwOy0xMFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGNpcmNsZSBjeD1cIiN4XCIgY3k9XCIwXCIgcj1cIiNyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYzJcIiBzdHJva2Utd2lkdGg9XCIjc3dcIj5cIlwiXCJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlwiPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN5XCIgdmFsdWVzPVwiMzkwOzE5MFwiIHRpbWVzPVwiMDsxXCIgXCJcIlwiXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcImR1cj1cIiN7ZH1zXCIgYmVnaW49XCIje2lkeH1zXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlwiXCJcIlxuICAgICAgICAgICAgICAgICAgICBcIlwiXCI8L2NpcmNsZT5cIlwiXCJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcIilcbiAgICAgICAgICAgIHdyYXAocmV0LmpvaW4oXCJcIikgKyBcIjwvc3ZnPlwiKVxuXG4gICAgaGFuZGxlciA9XG4gICAgICAgIHF1ZXVlOiB7fVxuICAgICAgICBydW5uaW5nOiBmYWxzZVxuICAgICAgICBtYWluOiAodGltZXN0YW1wKSAtPlxuICAgICAgICAgICAga2VlcG9uID0gZmFsc2VcbiAgICAgICAgICAgIHJlbW92ZWQgPSBbXVxuICAgICAgICAgICAgZm9yIGssZnVuYyBvZiBAcXVldWUgPT5cbiAgICAgICAgICAgICAgICByZXQgPSBmdW5jIHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIGlmICFyZXQgPT4gcmVtb3ZlZC5wdXNoIGZ1bmNcbiAgICAgICAgICAgICAgICBrZWVwb24gPSBrZWVwb24gb3IgcmV0XG4gICAgICAgICAgICBmb3IgayxmdW5jIG9mIEBxdWV1ZSA9PiBpZiByZW1vdmVkLmluZGV4T2YoZnVuYykgPj0gMCA9PiBkZWxldGUgQHF1ZXVlW2tdXG4gICAgICAgICAgICBpZiBrZWVwb24gPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICh+PiBAbWFpbiBpdClcbiAgICAgICAgICAgIGVsc2UgQHJ1bm5pbmcgPSBmYWxzZVxuICAgICAgICBhZGQ6IChrZXksIGYpIC0+XG4gICAgICAgICAgICBpZiAhQHF1ZXVlW2tleV0gPT4gQHF1ZXVlW2tleV0gPSBmXG4gICAgICAgICAgICBpZiAhQHJ1bm5pbmcgPT5cbiAgICAgICAgICAgICAgICBAcnVubmluZyA9IHRydWVcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKH4+IEBtYWluIGl0KVxuXG5cbiAgICB3aW5kb3cubGRCYXIgPSBsZEJhciA9IChzZWxlY3Rvciwgb3B0aW9uID0ge30pIC0+XG4gICAgICAgIHhtbG5zID0geGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIHJvb3QgPSBpZiB0eXBlb2YhIHNlbGVjdG9yIGlzIFxcU3RyaW5nXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHNlbGVjdG9yXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGVjdG9yXG5cbiAgICAgICAgaWYgIXJvb3QubGRCYXIgPT4gcm9vdC5sZEJhciA9IEBcblxuICAgICAgICBjbHMgPSByb290LmdldEF0dHJpYnV0ZShcXGNsYXNzKSBvciAnJ1xuICAgICAgICBpZiAhfmNscy5pbmRleE9mKCdsZEJhcicpID0+IHJvb3Quc2V0QXR0cmlidXRlIFxcY2xhc3MsIFwiI2NscyBsZEJhclwiXG4gICAgICAgIGlkLXByZWZpeCA9IFwibGRCYXItI3tNYXRoLnJhbmRvbSF0b1N0cmluZyAxNiAuc3Vic3RyaW5nIDJ9XCJcbiAgICAgICAgaWQgPVxuICAgICAgICAgICAga2V5OiBpZC1wcmVmaXhcbiAgICAgICAgICAgIGNsaXA6IFwiI3tpZC1wcmVmaXh9LWNsaXBcIlxuICAgICAgICAgICAgZmlsdGVyOiBcIiN7aWQtcHJlZml4fS1maWx0ZXJcIlxuICAgICAgICAgICAgcGF0dGVybjogXCIje2lkLXByZWZpeH0tcGF0dGVyblwiXG4gICAgICAgICAgICBtYXNrOiBcIiN7aWQtcHJlZml4fS1tYXNrXCJcbiAgICAgICAgICAgIG1hc2stcGF0aDogXCIje2lkLXByZWZpeH0tbWFzay1wYXRoXCJcbiAgICAgICAgZG9tVHJlZSA9IChuLG8pIC0+XG4gICAgICAgICAgICBuID0gbmV3Tm9kZSBuXG4gICAgICAgICAgICBmb3Igayx2IG9mIG8gPT4gaWYgayAhPSBcXGF0dHIgPT4gbi5hcHBlbmRDaGlsZCBkb21UcmVlKGssIHYgb3Ige30pXG4gICAgICAgICAgICBuLmF0dHJzKG8uYXR0ciBvciB7fSlcbiAgICAgICAgICAgIG5cbiAgICAgICAgbmV3Tm9kZSA9IChuKSAtPiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuX19wcm90b19fLl9fcHJvdG9fXy5fX3Byb3RvX19cbiAgICAgICAgICAgIC4udGV4dCA9ICh0KSAtPiBAYXBwZW5kQ2hpbGQgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodClcbiAgICAgICAgICAgIC4uYXR0cnMgPSAobykgLT4gZm9yIGssdiBvZiBvID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gLyhbXjpdKyk6KFteOl0rKS8uZXhlYyhrKVxuICAgICAgICAgICAgICAgIGlmICFyZXQgb3IgIXhtbG5zW3JldC4xXSA9PiBAc2V0QXR0cmlidXRlIGssIHZcbiAgICAgICAgICAgICAgICBlbHNlIEBzZXRBdHRyaWJ1dGVOUyB4bWxuc1tyZXQuMV0sIGssIHZcbiAgICAgICAgICAgIC4uc3R5bGVzID0gKG8pIC0+IGZvciBrLHYgb2YgbyA9PiBAc3R5bGVba10gPSB2XG4gICAgICAgICAgICAuLmFwcGVuZCA9IChuKSAtPiBAYXBwZW5kQ2hpbGQgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyBcImh0dHA6Ly93d3cudzMub2cvMjAwMC9zdmdcIiwgblxuICAgICAgICAgICAgLi5hdHRyID0gKG4sdikgLT4gaWYgdj8gPT4gQHNldEF0dHJpYnV0ZSBuLCB2IGVsc2UgQGdldEF0dHJpYnV0ZSBuXG4gICAgICAgIGNvbmZpZyA9XG4gICAgICAgICAgICBcInR5cGVcIjogJ3N0cm9rZSdcbiAgICAgICAgICAgIFwiaW1nXCI6ICcnXG4gICAgICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgICAgIFwiZmlsbC1kaXJcIjogXFxidHRcbiAgICAgICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAzXG4gICAgICAgICAgICBcInBhdHRlcm4tc2l6ZVwiOiBudWxsXG4gICAgICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXFwzXG4gICAgICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxXG4gICAgICAgICAgICBcImVhc2luZ1wiOiBcXGxpbmVhclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICAgICAgICBcImltZy1zaXplXCI6IG51bGxcblxuICAgICAgICBjb25maWdbXCJwcmVzZXRcIl0gPSByb290LmF0dHIoXCJkYXRhLXByZXNldFwiKSBvciBvcHRpb25bXCJwcmVzZXRcIl1cblxuICAgICAgICBpZiBjb25maWcucHJlc2V0P1xuICAgICAgICAgICAgIyB1c2UgdGhlIGRlZmF1bHQgcHJlc2V0XG4gICAgICAgICAgICBjb25maWcgPDw8IHByZXNldHNbY29uZmlnLnByZXNldF1cblxuICAgICAgICAjIG92ZXJ3cml0ZSBpZiB0aGVyZSBhcmUgYXJndW1lbnRzIHBhc3NlZCB2aWEgZGF0YS0qIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIGF0dHIgb2YgY29uZmlnXG4gICAgICAgICAgICBpZiB0aGF0ID0gcm9vdC5hdHRyIFwiZGF0YS0je2F0dHJ9XCJcbiAgICAgICAgICAgICAgICBjb25maWdbYXR0cl0gPSB0aGF0XG5cbiAgICAgICAgY29uZmlnIDw8PCBvcHRpb25cbiAgICAgICAgaWYgY29uZmlnLmltZyA9PiBjb25maWcucGF0aCA9IG51bGxcblxuICAgICAgICBpcy1zdHJva2UgPSBjb25maWcudHlwZSA9PSBcXHN0cm9rZVxuICAgICAgICBwYXJzZS1yZXMgPSAodikgLT5cbiAgICAgICAgICAgIHBhcnNlciA9IC9kYXRhOmxkYmFyXFwvcmVzLChbXigpXSspXFwoKFteKV0rKVxcKS9cbiAgICAgICAgICAgIHJldCA9IHBhcnNlci5leGVjKHYpXG4gICAgICAgICAgICBpZiAhcmV0ID0+IHJldHVybiB2XG4gICAgICAgICAgICByZXQgPSBtYWtlW3JldC4xXS5hcHBseSBtYWtlLCByZXQuMi5zcGxpdChcXCwpXG4gICAgICAgIGNvbmZpZy5maWxsID0gcGFyc2UtcmVzIGNvbmZpZy5maWxsXG4gICAgICAgIGNvbmZpZy5zdHJva2UgPSBwYXJzZS1yZXMgY29uZmlnLnN0cm9rZVxuXG4gICAgICAgIGRvbSA9XG4gICAgICAgICAgICBhdHRyOlxuICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXFxodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkJ1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgZGVmczpcbiAgICAgICAgICAgICAgICBmaWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5maWx0ZXIsIHg6IC0xLCB5OiAtMSwgd2lkdGg6IDMsIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICBmZU1vcnBob2xvZ3k6IGF0dHI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogKGlmICtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXT49MCA9PiBcXGRpbGF0ZSBlbHNlIFxcZXJvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IE1hdGguYWJzKCtjb25maWdbXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgZmVDb2xvck1hdHJpeDogYXR0cjoge3ZhbHVlczogJzAgMCAwIDAgMSAgICAwIDAgMCAwIDEgICAgMCAwIDAgMCAxICAgIDAgMCAwIDEgMCcsIHJlc3VsdDogXCJjbVwifVxuICAgICAgICAgICAgICAgIG1hc2s6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5tYXNrXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IGNvbmZpZy5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJ1cmwoXFwjI3tpZC5maWx0ZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG5cbiAgICAgICAgICAgICAgICBnOlxuICAgICAgICAgICAgICAgICAgICBtYXNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogaWQ6IGlkLm1hc2stcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOiBjb25maWcucGF0aCBvciBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXFwjZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcXCNmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwidXJsKFxcIyN7aWQuZmlsdGVyfSlcIlxuXG4gICAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgICAgIGF0dHI6IGlkOiBpZC5jbGlwXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHthdHRyOiBjbGFzczogXFxtYXNrLCBmaWxsOiBcXCMwMDB9XG4gICAgICAgICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgICAgICAgICAgYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZC5wYXR0ZXJuLCBwYXR0ZXJuVW5pdHM6IFxcdXNlclNwYWNlT25Vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6MCwgeTogMCwgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGF0dHI6IHg6IDAsIHk6IDAsIHdpZHRoOiAzMDAsIGhlaWdodDogMzAwXG5cbiAgICAgICAgc3ZnID0gZG9tVHJlZSBcXHN2ZywgZG9tXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFxcZGl2XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlIFxcY2xhc3MsIFxcbGRCYXItbGFiZWxcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCBzdmdcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCB0ZXh0XG5cbiAgICAgICAgZ3JvdXAgPSBbMCwwXVxuICAgICAgICBsZW5ndGggPSAwXG5cbiAgICAgICAgQGZpdCA9IC0+XG4gICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICBkID0gKE1hdGgubWF4LmFwcGx5IG51bGwsIDxbc3Ryb2tlLXdpZHRoIHN0cm9rZS10cmFpbC13aWR0aCBmaWxsLWJhY2tncm91bmQtZXh0cnVkZV0+Lm1hcCgtPmNvbmZpZ1tpdF0pKSAqIDEuNVxuXG4gICAgICAgICAgICBzdmcuYXR0cnMgdmlld0JveDogW2JveC54IC0gZCwgYm94LnkgLSBkLCBib3gud2lkdGggKyBkICogMiwgYm94LmhlaWdodCArIGQgKiAyXS5qb2luKFwiIFwiKVxuXG4gICAgICAgICAgICBpZiAhcm9vdC5zdHlsZS53aWR0aCA9PiByb290LnN0eWxlcyB3aWR0aDogXCIje2JveC53aWR0aCArIGQgKiAyfXB4XCJcbiAgICAgICAgICAgIGlmICFyb290LnN0eWxlLmhlaWdodCA9PiByb290LnN0eWxlcyBoZWlnaHQ6IFwiI3tib3guaGVpZ2h0ICsgZCAqIDJ9cHhcIlxuICAgICAgICAgICAgcmVjdCA9IGdyb3VwLjAucXVlcnlTZWxlY3RvciBcXHJlY3RcbiAgICAgICAgICAgIGlmIHJlY3QgPT4gcmVjdC5hdHRycyBkb1xuICAgICAgICAgICAgICAgIHg6IGJveC54IC0gZCwgeTogYm94LnkgLSBkLCB3aWR0aDogYm94LndpZHRoICsgZCAqIDIsIGhlaWdodDogYm94LmhlaWdodCArIGQgKiAyXG5cbiAgICAgICAgaWYgY29uZmlnLnBhdGggPT5cbiAgICAgICAgICAgIGlmIGlzLXN0cm9rZSA9PlxuICAgICAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcGF0aDogYXR0cjpcbiAgICAgICAgICAgICAgICAgICAgZDogY29uZmlnLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXFxub25lXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcXGJhc2VsaW5lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZ3JvdXAuMCA9IGRvbVRyZWUgXFxnLCByZWN0OiBhdHRyOlxuICAgICAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBcInVybChcXCMje2lkLm1hc2stcGF0aH0pXCIsIGZpbGw6IGNvbmZpZ1tcImZpbGwtYmFja2dyb3VuZFwiXVxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXFxmcmFtZVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMFxuICAgICAgICAgICAgZ3JvdXAuMSA9IGRvbVRyZWUgXFxnLCBwYXRoOiBhdHRyOlxuICAgICAgICAgICAgICAgIGQ6IGNvbmZpZy5wYXRoLCBjbGFzczogaWYgaXMtc3Ryb2tlID0+IFxcbWFpbmxpbmUgZWxzZSBcXHNvbGlkXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkIGdyb3VwLjFcbiAgICAgICAgICAgIHBhdGgwID0gZ3JvdXAuMC5xdWVyeVNlbGVjdG9yIChpZiBpcy1zdHJva2UgPT4gXFxwYXRoIGVsc2UgXFxyZWN0KVxuICAgICAgICAgICAgcGF0aDEgPSBncm91cC4xLnF1ZXJ5U2VsZWN0b3IgXFxwYXRoXG4gICAgICAgICAgICBpZiBpcy1zdHJva2UgPT4gcGF0aDEuYXR0cnMgZmlsbDogXFxub25lXG5cbiAgICAgICAgICAgIHBhdGltZyA9IHN2Zy5xdWVyeVNlbGVjdG9yICdwYXR0ZXJuIGltYWdlJ1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCAtPlxuICAgICAgICAgICAgICAgIGJveCA9IGlmIGNvbmZpZ1tcInBhdHRlcm4tc2l6ZVwiXSA9PiB7d2lkdGg6ICt0aGF0LCBoZWlnaHQ6ICt0aGF0fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgaW1nLndpZHRoIGFuZCBpbWcuaGVpZ2h0ID0+IHt3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgZWxzZSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgXFxwYXR0ZXJuIC5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyB7d2lkdGg6IGJveC53aWR0aCwgaGVpZ2h0OiBib3guaGVpZ2h0fVxuICAgICAgICAgICAgaWYgLy4rXFwuLit8XmRhdGE6Ly5leGVjKGlmICFpcy1zdHJva2UgPT4gY29uZmlnLmZpbGwgZWxzZSBjb25maWcuc3Ryb2tlKSA9PlxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpZiAhaXMtc3Ryb2tlID0+IGNvbmZpZy5maWxsIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgICAgIHBhdGltZy5hdHRycyBcInhsaW5rOmhyZWZcIjogaW1nLnNyYyAjaWYgIWlzLXN0cm9rZSA9PiBjb25maWcuZmlsbCBlbHNlIGNvbmZpZy5zdHJva2VcblxuICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgcGF0aDAuYXR0cnMgc3Ryb2tlOiBjb25maWdbXCJzdHJva2UtdHJhaWxcIl0sIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS10cmFpbC13aWR0aFwiXVxuICAgICAgICAgICAgICAgIHBhdGgxLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGNvbmZpZ1tcInN0cm9rZS13aWR0aFwiXVxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGlmIC8uK1xcLi4rfF5kYXRhOi8uZXhlYyhjb25maWcuc3Ryb2tlKSA9PiBcInVybChcXCMje2lkLnBhdHRlcm59KVwiIGVsc2UgY29uZmlnLnN0cm9rZVxuICAgICAgICAgICAgaWYgY29uZmlnLmZpbGwgYW5kICFpcy1zdHJva2UgPT5cbiAgICAgICAgICAgICAgICBwYXRoMS5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBpZiAvLitcXC4uK3xeZGF0YTovLmV4ZWMoY29uZmlnLmZpbGwpID0+IFwidXJsKFxcIyN7aWQucGF0dGVybn0pXCIgZWxzZSBjb25maWcuZmlsbFxuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXRoMS5nZXRUb3RhbExlbmd0aCFcbiAgICAgICAgICAgIEBmaXQhXG4gICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIGNvbmZpZy5pbWcgPT5cbiAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgcmV0ID0gY29uZmlnW1wiaW1nLXNpemVcIl0uc3BsaXQoXFwsKVxuICAgICAgICAgICAgICAgIHNpemUgPSB7d2lkdGg6ICtyZXQuMCwgaGVpZ2h0OiArcmV0LjF9XG4gICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG5cbiAgICAgICAgICAgIGdyb3VwLjAgPSBkb21UcmVlIFxcZywgcmVjdDogYXR0cjpcbiAgICAgICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgbWFzazogXCJ1cmwoXFwjI3tpZC5tYXNrfSlcIiwgZmlsbDogY29uZmlnW1wiZmlsbC1iYWNrZ3JvdW5kXCJdXG4gICAgICAgICAgICBzdmcucXVlcnlTZWxlY3RvciAnbWFzayBpbWFnZScgLmF0dHJzIGRvXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIGdyb3VwLjEgPSBkb21UcmVlIFxcZywgaW1hZ2U6IGF0dHI6XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQsIHg6IDAsIHk6IDAsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICAgICN3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgeDogMCwgeTogMCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogaWYgY29uZmlnLnR5cGUgPT0gXFxmaWxsID0+IFwidXJsKFxcIyN7aWQuY2xpcH0pXCIgZWxzZSAnJ1xuICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBjb25maWcuaW1nLCBjbGFzczogXFxzb2xpZFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlIVxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIgXFxsb2FkLCB+PlxuICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcImltZy1zaXplXCJdID0+XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbmZpZ1tcImltZy1zaXplXCJdLnNwbGl0KFxcLClcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHt3aWR0aDogK3JldC4wLCBoZWlnaHQ6ICtyZXQuMX1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIGltZy53aWR0aCBhbmQgaW1nLmhlaWdodCA9PiBzaXplID0ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH1cbiAgICAgICAgICAgICAgICBlbHNlIHNpemUgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9XG4gICAgICAgICAgICAgICAgc3ZnLnF1ZXJ5U2VsZWN0b3IgJ21hc2sgaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIGdyb3VwLjEucXVlcnlTZWxlY3RvciAnaW1hZ2UnIC5hdHRycyBkb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodFxuXG4gICAgICAgICAgICAgICAgQGZpdCFcbiAgICAgICAgICAgICAgICBAc2V0IHVuZGVmaW5lZCwgZmFsc2VcbiAgICAgICAgICAgICAgICBAaW5pdGVkID0gdHJ1ZVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNvbmZpZy5pbWdcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZCBncm91cC4wXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQgZ3JvdXAuMVxuICAgICAgICBzdmcuYXR0cnMgd2lkdGg6IFxcMTAwJSwgaGVpZ2h0OiBcXDEwMCUgIywgdmlld0JveDogJzAgMCAxMDAgMTAwJ1xuXG4gICAgICAgIEB0cmFuc2l0aW9uID1cbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIHNyYzogMFxuICAgICAgICAgICAgICAgIGRlczogMFxuICAgICAgICAgICAgdGltZToge31cblxuICAgICAgICAgICAgZWFzZTogKHQsYixjLGQpIC0+XG4gICAgICAgICAgICAgICAgdCA9IHQgLyAoZCAqIDAuNSlcbiAgICAgICAgICAgICAgICBpZiB0IDwgMSA9PiByZXR1cm4gYyAqIDAuNSAqIHQgKiB0ICsgYlxuICAgICAgICAgICAgICAgIHQgPSB0IC0gMVxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqIDAuNSAqICh0Kih0IC0gMikgLSAxKSArIGJcblxuICAgICAgICAgICAgaGFuZGxlcjogKHRpbWUpIC0+XG4gICAgICAgICAgICAgICAgaWYgIUB0aW1lLnNyYz8gPT4gQHRpbWUuc3JjID0gdGltZVxuICAgICAgICAgICAgICAgIFtkdiwgZHQsIGR1cl0gPSBbQHZhbHVlLmRlcyAtIEB2YWx1ZS5zcmMsICh0aW1lIC0gQHRpbWUuc3JjKSAqIDAuMDAxLCArY29uZmlnW1wiZHVyYXRpb25cIl0gb3IgMV1cbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdiA9IE1hdGgucm91bmQoQGVhc2UgZHQsIEB2YWx1ZS5zcmMsIGR2LCBkdXIpXG4gICAgICAgICAgICAgICAgaWYgaXMtc3Ryb2tlID0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoMVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNvbmZpZ1tcInN0cm9rZS1kaXJcIl0gPT0gXFxyZXZlcnNlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAje2xlbmd0aCAqICgxMDAgLSB2KSAqIDAuMDF9ICN7bGVuZ3RoICogdiAqIDAuMDF9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgPT4gXCIje3YgKiAwLjAxICogbGVuZ3RofSAjeygxMDAgLSB2KSAqIDAuMDEgKiBsZW5ndGggKyAxfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBib3ggPSBncm91cC4xLmdldEJCb3ghXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IGNvbmZpZ1tcImZpbGwtZGlyXCJdXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gaWYgZGlyID09IFxcYnR0IG9yICFkaXIgPT4gZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJveC55ICsgYm94LmhlaWdodCAqICgxMDAgLSB2KSAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHR0YiA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodCAqIHYgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBib3gueCwgd2lkdGg6IGJveC53aWR0aFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXGx0ciA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LngsIHdpZHRoOiBib3gud2lkdGggKiB2ICogMC4wMVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGRpciA9PSBcXHJ0bCA9PiBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogYm94LnksIGhlaWdodDogYm94LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYm94LnggKyBib3gud2lkdGggKiAoMTAwIC0gdikgKiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYm94LndpZHRoICogdiAqIDAuMDFcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHN2Zy5xdWVyeVNlbGVjdG9yIFxccmVjdFxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgc3R5bGVcbiAgICAgICAgICAgICAgICBpZiBkdCA+PSBkdXIgPT4gZGVsZXRlIEB0aW1lLnNyYzsgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHN0YXJ0OiAoc3JjLCBkZXMsIGRvVHJhbnNpdGlvbikgLT5cbiAgICAgICAgICAgICAgICBAdmFsdWUgPDw8IHtzcmMsIGRlc31cbiAgICAgICAgICAgICAgICAhISggcm9vdC5vZmZzZXRXaWR0aCB8fCByb290Lm9mZnNldEhlaWdodCB8fCByb290LmdldENsaWVudFJlY3RzIWxlbmd0aCApXG4gICAgICAgICAgICAgICAgaWYgIWRvVHJhbnNpdGlvbiBvciAhKCByb290Lm9mZnNldFdpZHRoIHx8IHJvb3Qub2Zmc2V0SGVpZ2h0IHx8IHJvb3QuZ2V0Q2xpZW50UmVjdHMhbGVuZ3RoICkgPT5cbiAgICAgICAgICAgICAgICAgICAgQHRpbWUuc3JjID0gMFxuICAgICAgICAgICAgICAgICAgICBAaGFuZGxlciAxMDAwXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIGhhbmRsZXIuYWRkIGlkLmtleSwgKHRpbWUpIH4+IHJldHVybiBAaGFuZGxlciB0aW1lXG5cbiAgICAgICAgQHNldCA9ICh2LGRvVHJhbnNpdGlvbiA9IHRydWUpIC0+XG4gICAgICAgICAgICBzcmMgPSBAdmFsdWUgb3IgMFxuICAgICAgICAgICAgaWYgdj8gPT4gQHZhbHVlID0gdiBlbHNlIHYgPSBAdmFsdWVcbiAgICAgICAgICAgIGRlcyA9IEB2YWx1ZVxuICAgICAgICAgICAgQHRyYW5zaXRpb24uc3RhcnQgc3JjLCBkZXMsIGRvVHJhbnNpdGlvblxuXG4gICAgICAgIEBzZXQgKCtjb25maWcudmFsdWUgb3IgMCksIGZhbHNlXG4gICAgICAgIEBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFxcbG9hZCwgKC0+XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXC5sZEJhcikpLmZvckVhY2ggLT5cbiAgICAgICAgICBpZiAhaXQubGRCYXIgPT4gaXQubGRCYXIgPSBuZXcgbGRCYXIgaXRcbiAgICApLCBmYWxzZVxuIiwiZXhwb3J0IGhleSA9IC0+IGNvbnNvbGUubG9nIFwiVGhpcyBpcyBsb2FkaW5nIGJhciFcIlxuIiwiZXhwb3J0IHByZXNldHMgPVxuICAgIHJhaW5ib3c6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogJ2RhdGE6bGRiYXIvcmVzLGdyYWRpZW50KDAsMSwjYTU1MWRmLCNmZDUxYWQsI2ZmN2Y4MiwjZmZiODc0LCNmZmViOTApJ1xuICAgIGVuZXJneTpcbiAgICAgICAgXCJ0eXBlXCI6ICdmaWxsJ1xuICAgICAgICBcInBhdGhcIjogJ00xNSA1TDg1IDVBNSA1IDAgMCAxIDg1IDE1TDE1IDE1QTUgNSAwIDAgMSAxNSA1J1xuICAgICAgICBcInN0cm9rZVwiOiBcXCNmMDBcbiAgICAgICAgXCJmaWxsXCI6ICdkYXRhOmxkYmFyL3JlcyxncmFkaWVudCg0NSwyLCM0ZTksIzhmYiwjNGU5KSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcIzQ0NFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICBzdHJpcGU6XG4gICAgICAgIFwidHlwZVwiOiAnZmlsbCdcbiAgICAgICAgXCJwYXRoXCI6ICdNMTUgNUw4NSA1QTUgNSAwIDAgMSA4NSAxNUwxNSAxNUE1IDUgMCAwIDEgMTUgNSdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjZjAwXG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsc3RyaXBlKCMyNWIsIzU4ZSwxKSdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcImx0clwiXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDFcbiAgICB0ZXh0OlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwiaW1nXCI6IFwiXCJcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDcwIDIwXCI+PHRleHQgeD1cIjM1XCIgeT1cIjEwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIiBmb250LWZhbWlseT1cImFyaWFsXCI+TE9BRElORzwvdGV4dD48L3N2Zz5cIlwiXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmQtZXh0cnVkZVwiOiAxLjNcbiAgICAgICAgXCJwYXR0ZXJuLXNpemVcIjogMTAwXG4gICAgICAgIFwiZmlsbC1kaXJcIjogXCJsdHJcIlxuICAgICAgICBcImltZy1zaXplXCI6IFwiNzAsMjBcIlxuICAgIGxpbmU6XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCAxMEw5MCAxMCdcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDFcbiAgICBmYW46XG4gICAgICAgIFwidHlwZVwiOiAnc3Ryb2tlJ1xuICAgICAgICBcInBhdGhcIjogJ00xMCA5MEE0MCA0MCAwIDAgMSA5MCA5MCdcbiAgICAgICAgXCJmaWxsLWRpclwiOiBcXGJ0dFxuICAgICAgICBcImZpbGxcIjogXFwjMjViXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kXCI6IFxcI2RkZFxuICAgICAgICBcImZpbGwtYmFja2dyb3VuZC1leHRydWRlXCI6IDNcbiAgICAgICAgXCJzdHJva2UtZGlyXCI6IFxcbm9ybWFsXG4gICAgICAgIFwic3Ryb2tlXCI6IFxcIzI1YlxuICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcXDNcbiAgICAgICAgXCJzdHJva2UtdHJhaWxcIjogXFwjZGRkXG4gICAgICAgIFwic3Ryb2tlLXRyYWlsLXdpZHRoXCI6IDAuNVxuICAgIGNpcmNsZTpcbiAgICAgICAgXCJ0eXBlXCI6ICdzdHJva2UnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiBcXCMyNWJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogM1xuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4gICAgYnViYmxlOlxuICAgICAgICBcInR5cGVcIjogJ2ZpbGwnXG4gICAgICAgIFwicGF0aFwiOiAnTTUwIDEwQTQwIDQwIDAgMCAxIDUwIDkwQTQwIDQwIDAgMCAxIDUwIDEwJ1xuICAgICAgICBcImZpbGwtZGlyXCI6IFxcYnR0XG4gICAgICAgIFwiZmlsbFwiOiAnZGF0YTpsZGJhci9yZXMsYnViYmxlKCMzOWQsI2NlZiknXG4gICAgICAgIFwicGF0dGVybi1zaXplXCI6IFwiMTUwXCJcbiAgICAgICAgXCJmaWxsLWJhY2tncm91bmRcIjogXFwjZGRkXG4gICAgICAgIFwiZmlsbC1iYWNrZ3JvdW5kLWV4dHJ1ZGVcIjogMlxuICAgICAgICBcInN0cm9rZS1kaXJcIjogXFxub3JtYWxcbiAgICAgICAgXCJzdHJva2VcIjogXFwjMjViXG4gICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFxcM1xuICAgICAgICBcInN0cm9rZS10cmFpbFwiOiBcXCNkZGRcbiAgICAgICAgXCJzdHJva2UtdHJhaWwtd2lkdGhcIjogMC41XG4iXX0=
