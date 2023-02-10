const cl = (log) => console.log(log) ; 
const D = (log) => log.toUpperCase();
const custumFilter = (input , arr) => {
    let output = arr.filter(elem =>{
        elem.weight = weight(elem.label , input) ; 
        return (D(elem.label).includes(D(input)) || D(input).includes(D(elem.label) || weight(elem.label , input) < 11))  
    }) ;
    return output.sort(dynamicSort("weight"));
}

var weight = function(seq1,seq2)
{
    var len1=seq1.length;
    var len2=seq2.length;
    var i, j;
    var dist;
    var ic, dc, rc;
    var last, old, column;

    var weighter={
        insert:function(c) { return 1.; },
        delete:function(c) { return 0.5; },
        replace:function(c, d) { return 0.3; }
    };

    /* don't swap the sequences, or this is gonna be painful */
    if (len1 == 0 || len2 == 0) {
        dist = 0;
        while (len1)
            dist += weighter.delete(seq1[--len1]);
        while (len2)
            dist += weighter.insert(seq2[--len2]);
        return dist;
    }

    column = []; // malloc((len2 + 1) * sizeof(double));
    //if (!column) return -1;

    column[0] = 0;
    for (j = 1; j <= len2; ++j)
        column[j] = column[j - 1] + weighter.insert(seq2[j - 1]);

    for (i = 1; i <= len1; ++i) {
        last = column[0]; /* m[i-1][0] */
        column[0] += weighter.delete(seq1[i - 1]); /* m[i][0] */
        for (j = 1; j <= len2; ++j) {
            old = column[j];
            if (seq1[i - 1] == seq2[j - 1]) {
                column[j] = last; /* m[i-1][j-1] */
            } else {
                ic = column[j - 1] + weighter.insert(seq2[j - 1]);      /* m[i][j-1] */
                dc = column[j] + weighter.delete(seq1[i - 1]);          /* m[i-1][j] */
                rc = last + weighter.replace(seq1[i - 1], seq2[j - 1]); /* m[i-1][j-1] */
                column[j] = ic < dc ? ic : (dc < rc ? dc : rc);
            }
            last = old;
        }
    }

    dist = column[len2];
    return dist;
}
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}
module.exports = {
    weight,
    dynamicSort,
    cl,
    D,
    custumFilter,
}