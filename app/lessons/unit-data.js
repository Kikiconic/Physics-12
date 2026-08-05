export const electrostaticsLessons = [
  {n:"01",title:"Static electric charges",text:"Introduction to the electrostatics chapter and what electrostatic force is.",symbol:"+ −",slug:"static-electric-charges"},
  {n:"02",title:"The electric force",text:"Introduction to Coulomb’s law and how to use it.",symbol:"F",slug:"electric-force"},
  {n:"03",title:"Electric field strength",text:"Introduction to electric field strength, what it means, and its formula.",symbol:"E",slug:"electric-field-strength"},
  {n:"04",title:"Electric potentials",text:"Electric potential, potential energy, voltage, and their relationship with electric fields.",symbol:"V",slug:"electric-potentials"}
];

export const magneticLessons = [
  {n:"01",title:"Introduction to magnets",text:"Magnets, magnetic fields, current, solenoids, and electromagnets.",symbol:"N S",slug:"introduction-to-magnets"},
  {n:"02",title:"Magnetic field strength",text:"Magnetic force on particles and wires, plus the magnetic field inside a solenoid.",symbol:"B",slug:"magnetic-field-strength"},
  {n:"03",title:"Magnetic field and the electron",text:"Circular motion, velocity selectors, mass spectrometers, and charge-to-mass ratio.",symbol:"e⁻",slug:"magnetic-field-and-the-electron"},
  {n:"04",title:"The right-hand rules",text:"Ampère's rule, the solenoid rule, the motor rule, and conventional-current direction.",symbol:"RHR",slug:"right-hand-rules"}
];

export const inductionLessons = [
  {n:"01",title:"Induced electromotive force (EMF)",text:"Introduction to induced EMF and how it is produced.",symbol:"EMF",slug:"induced-electromotive-force"},
  {n:"02",title:"Magnetic flux and Faraday's law of induction",text:"Introduction to magnetic flux and Faraday's law of induction.",symbol:"Φ",slug:"magnetic-flux-and-faradays-law"},
  {n:"03",title:"Parallel and perpendicular relationships",text:"A quick comparison of coil axis, wire motion, magnetic flux, and induced EMF.",symbol:"∥ ⟂",slug:"parallel-and-perpendicular-induction"},
  {n:"04",title:"EMF with generators and electric motors",text:"The armature and the opposite energy changes in generators and electric motors.",symbol:"G M",slug:"emf-generators-and-motors"},
  {n:"05",title:"The transformer",text:"Introduction to transformers and electromagnetic induction between coils.",symbol:"T",slug:"the-transformer"}
];

export const electrostaticsFormulas = [
  String.raw`F_e=k\frac{\left|q_1q_2\right|}{r^2}`,
  String.raw`E=\frac{F_e}{\left|q\right|}`,
  String.raw`E=k\frac{\left|Q\right|}{r^2}`,
  String.raw`V=k\frac{Q}{r}`,
  String.raw`E_p=qV`,
  String.raw`E_p=k\frac{q_1q_2}{r}`,
  String.raw`\Delta E_p=q\Delta V`,
  String.raw`E=\frac{\left|\Delta V\right|}{d}`
];
