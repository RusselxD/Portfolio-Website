a =  '68 84 75 82 68 90 62 88 76 93 73 79 88 73 60 93 71 59 85 75 61 65 75 87 74 62 95 78 63 72 66 78 82 75 94 77 69 74 68 60 96 78 89 61 75 95 60 79 83 71 79 62 67 97 78 85 76 65 71 75 65 80 73 57 88 78 62 76 53 74 86 67 73 81 72 63 76 75 85 77'

b = a.split(' ').sort((a, b) => a - b)

q = b.filter((n) => {
     return n >= 50 && n <= 54
}) 

w = b.filter((n) => {
     return n >= 55 && n <= 59
}) 

e = b.filter((n) => {
     return n >= 60 && n <= 64
}) 

r = b.filter((n) => {
     return n >= 65 && n <= 69
}) 

t = b.filter((n) => {
     return n >= 70 && n <= 74
}) 

y = b.filter((n) => {
     return n >= 75 && n <= 79
}) 

u = b.filter((n) => {
     return n >= 80 && n <= 84
}) 

i = b.filter((n) => {
     return n >= 85 && n <= 89
}) 

o = b.filter((n) => {
     return n >= 90 && n <= 94
}) 

p = b.filter((n) => {
     return n >= 95 && n <= 99
}) 

console.log(b)
console.log(q.length)
console.log(w.length)
console.log(e.length)
console.log(r.length)
console.log(t.length)
console.log(y.length)
console.log(u.length)
console.log(i.length)
console.log(o.length)
console.log(p.length)