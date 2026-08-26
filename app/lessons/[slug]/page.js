import Link from "next/link";
import katex from "katex";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../site-chrome";
import ElectricFieldStrengthSimulator from "../electric-field-strength-simulator";

const lessons = {
  "vectors-in-two-dimensions": {
    number: "01",
    unit: "01",
    title: "Vectors in two dimensions",
    introduction: "Introduction to vectors and how their size and direction are represented.",
    sections: [
      {
        title: "What is a vector?",
        paragraphs: [
          "A vector is a quantity that has both a size and a direction. The size of a vector is also called its magnitude.",
          "You can picture a vector as an arrow. The length of the arrow represents the size of the vector, and the direction in which the arrow points represents the vector's direction."
        ],
        pointLead: "Examples of vectors:",
        points: [
          "Velocity: 20 m/s east",
          "Force: 20 N upward",
          "Displacement: 10 m to the left",
          "Acceleration: 9.8 m/s² downward"
        ]
      },
      {
        title: "Vectors in the same direction",
        paragraphs: [
          "To add or subtract vectors, you must pay attention to both their size and direction.",
          "If two vectors point in the same direction, add their magnitudes. For example, 5 N right and 3 N right give a resultant of 8 N right."
        ],
        formulaSet: [
          {label:"Same-direction example",math:String.raw`5\ \mathrm{N\ right}+3\ \mathrm{N\ right}=8\ \mathrm{N\ right}`}
        ]
      },
      {
        title: "Vectors in opposite directions",
        paragraphs: [
          "If two vectors point in opposite directions, subtract the smaller magnitude from the larger magnitude.",
          "For example, 8 N right and 3 N left give a resultant of 5 N right. The resultant points in the direction of the larger vector."
        ],
        formulaSet: [
          {label:"Opposite-direction example",math:String.raw`R=8\ \mathrm{N}-3\ \mathrm{N}=5\ \mathrm{N\ right}`}
        ]
      },
      {
        title: "Subtracting a vector",
        paragraphs: [
          "Subtracting a vector means reversing its direction and then adding it.",
          "For example, begin with 5 N right minus 3 N right. Reverse the second vector so that it becomes 3 N left. You now have 5 N right and 3 N left, giving a resultant of 2 N right."
        ],
        formulaSet: [
          {label:"Original expression",math:String.raw`5\ \mathrm{N\ right}-3\ \mathrm{N\ right}`},
          {label:"Reverse the vector being subtracted",math:String.raw`-3\ \mathrm{N\ right}=3\ \mathrm{N\ left}`},
          {label:"Resultant",math:String.raw`R=5\ \mathrm{N}-3\ \mathrm{N}=2\ \mathrm{N\ right}`}
        ],
        derivation: true
      },
      {
        title: "Vectors at an angle",
        paragraphs: [
          "If two vectors are not on the same straight line, break them into horizontal x-components and vertical y-components.",
          "For example, combine a 3 N vector pointing right with a 4 N vector pointing upward. The two vectors form the sides of a right triangle, and the diagonal is the resultant vector.",
          "Use the Pythagorean theorem to find the magnitude of the resultant."
        ],
        formulaSet: [
          {label:"Pythagorean theorem",math:String.raw`R=\sqrt{3^2+4^2}`},
          {label:"Resultant magnitude",math:String.raw`R=5\ \mathrm{N}`}
        ],
        derivation: true,
        vectorTriangle: true
      },
      {
        title: "Using sine and cosine to find components",
        paragraphs: [
          "For vector questions, break each vector into a horizontal x-component and a vertical y-component. The main rule is: cosine gives the adjacent side, and sine gives the opposite side.",
          "If the angle θ is measured from the horizontal x-axis, the horizontal component touches the angle, so use cosine. The vertical component is across from the angle, so use sine.",
          "For example, consider a 10 N force acting at 30° above the horizontal."
        ],
        formulaSet: [
          {label:"Horizontal component",math:String.raw`F_x=F\cos\theta`},
          {label:"Vertical component",math:String.raw`F_y=F\sin\theta`},
          {label:"Substitute for the horizontal component",math:String.raw`F_x=10\cos30^\circ=8.66\ \mathrm{N\ right}`},
          {label:"Substitute for the vertical component",math:String.raw`F_y=10\sin30^\circ=5.00\ \mathrm{N\ up}`}
        ],
        derivation: true,
        componentTriangle: true
      },
      {
        title: "Finding the resultant from components",
        paragraphs: [
          "When a question contains more than one vector, first find the x- and y-components of every vector. Add all horizontal components to find the total x-component, and add all vertical components to find the total y-component.",
          "Treat right and up as positive directions. Treat left and down as negative directions.",
          "Use the Pythagorean theorem to find the magnitude of the resultant. Then use inverse tangent to find its direction. Always measure the angle from the horizontal axis unless the question says otherwise.",
          "Using the components 8.66 N right and 5.00 N up gives the original resultant of 10.0 N at 30° above the horizontal."
        ],
        formulaSet: [
          {label:"Add the horizontal components",math:String.raw`R_x=\sum V_x`},
          {label:"Add the vertical components",math:String.raw`R_y=\sum V_y`},
          {label:"Find the resultant magnitude",math:String.raw`R=\sqrt{R_x^2+R_y^2}`},
          {label:"Find the resultant direction",math:String.raw`\theta=\tan^{-1}\!\left(\frac{R_y}{R_x}\right)`},
          {label:"Example magnitude",math:String.raw`R=\sqrt{8.66^2+5.00^2}=10.0\ \mathrm{N}`},
          {label:"Example direction",math:String.raw`\theta=\tan^{-1}\!\left(\frac{5.00}{8.66}\right)=30^\circ`}
        ],
        derivation: true
      }
    ]
  },
  "statics-forces-in-equilibrium": {
    number: "02",
    unit: "01",
    title: "Statics: forces in equilibrium",
    introduction: "Introduction to static equilibrium and the conditions that keep an object from moving or rotating.",
    sections: [
      {
        title: "What is static equilibrium?",
        paragraphs: [
          "Static equilibrium means an object is not moving and not rotating because all the forces and torques acting on it are balanced.",
          "Static equilibrium has two conditions. The total force must equal zero, so the object does not move. The total torque must also equal zero, so the object does not rotate."
        ],
        formulaSet: [
          {label:"No translational motion",math:String.raw`\sum F=0`},
          {label:"No rotational motion",math:String.raw`\sum \tau=0`}
        ]
      },
      {
        title: "Simple example: a book on a table",
        paragraphs: [
          "Imagine a book sitting still on a table. Its weight, mg, pulls downward. The normal force from the table, F_N, pushes upward.",
          "If the normal force and weight are equal, the total vertical force is zero. The book does not move upward or downward, so it is in static equilibrium."
        ],
        points: [
          "Weight (mg) pulls downward.",
          "Normal force (F_N) pushes upward."
        ],
        formula: String.raw`F_N-mg=0`
      },
      {
        title: "Another example: a ladder",
        paragraphs: [
          "A ladder leaning against a wall is in static equilibrium when it stays still and does not rotate."
        ],
        points: [
          "The horizontal forces must balance.",
          "The vertical forces must balance.",
          "Clockwise torque must balance counterclockwise torque."
        ]
      },
      {
        title: "Translational equilibrium",
        paragraphs: [
          "For a body to be in static equilibrium, the vector sum of all the forces acting on it must be zero. This means the forces are balanced, so the body has no translational acceleration.",
          "The sum of the horizontal force components must be zero, and the sum of the vertical force components must also be zero."
        ],
        formulaSet: [
          {label:"Vector sum of all forces",math:String.raw`\sum \vec{F}=0`},
          {label:"Horizontal and vertical forces",math:String.raw`\sum F_x=0\qquad\text{and}\qquad\sum F_y=0`}
        ]
      },
      {
        title: "Rotational equilibrium",
        paragraphs: [
          "Rotational equilibrium"
        ]
      }
    ]
  },
  "static-electric-charges": {
    number: "01",
    unit: "06",
    title: "Static electric charges",
    introduction: "Introduction to the electrostatics chapter and what electrostatic force is.",
    sections: [
      {
        title: "What is static electric charge?",
        paragraphs: [
          "All matter is made of atoms. Inside each atom, protons have positive charge and electrons have negative charge. Neutrons have no electric charge. An object is neutral when it has the same amount of positive and negative charge.",
          "Static electric charge is a buildup of charge on an object. This happens when electrons move from one object to another. Protons stay inside the nuclei of atoms and usually do not move between objects.",
          "An object becomes negative when it gains electrons. It becomes positive when it loses electrons. The word static means that the extra charge stays in one place for some time.",
          "Charged objects can push or pull each other without touching. Two charges with the same sign repel. This means they push apart. Charges with opposite signs attract. This means they pull together. This push or pull is called the electrostatic force."
        ]
      },
      {
        title: "Positive and negative parallel plates",
        paragraphs: [
          "Parallel plates are two flat metal plates that face each other. One plate can be made positive, and the other plate can be made negative.",
          "The positive plate has fewer electrons than normal. The negative plate has more electrons than normal.",
          "The space between the plates has an electric field. The field points from the positive plate to the negative plate. Between large plates that are close together, the field is almost the same strength everywhere."
        ],
        diagram: true
      },
      {
        title: "How charges move between the plates",
        paragraphs: [
          "A positive charge moves in the same direction as the electric field. A free proton is positive, so it moves toward the negative plate.",
          "A negative charge moves in the opposite direction to the electric field. An electron is negative, so it moves toward the positive plate.",
          "A free proton can move between the plates, but protons inside a solid cannot move through the material. They are held inside atomic nuclei. In most solid materials, electrons are the charges that can move."
        ]
      },
      {
        title: "Conductors and insulators",
        paragraphs: [
          "A conductor is a material that lets electric charge move easily. Some electrons in a conductor are free to move from one atom to another. Metals such as copper and aluminum are good conductors.",
          "When charge is placed on a conductor, the electrons spread through the material. They move because charges with the same sign repel each other.",
          "An insulator is a material that does not let charge move easily. Its electrons are held tightly by their atoms. Rubber, glass, and dry plastic are common insulators.",
          "When charge is placed on an insulator, it usually stays close to the place where it was added. This is why static charge can remain on a plastic object."
        ]
      },
      {
        title: "Conservation of charge",
        paragraphs: [
          "Electric charge cannot be created or destroyed. It can only move from one object to another. This rule is called conservation of charge.",
          "Imagine that two neutral objects are rubbed together. If one object gains electrons, the other object must lose the same number of electrons. One object becomes negative, and the other becomes positive.",
          "In an isolated system, no charge can enter or leave. The total amount of charge in that system stays the same before and after any transfer."
        ]
      },
      {
        title: "Ways objects become charged",
        paragraphs: [
          "Charging by friction happens when two different materials are rubbed together. Electrons move from one material to the other. The object that gains electrons becomes negative, and the object that loses electrons becomes positive.",
          "Charging by contact happens when a charged object touches another object. Electrons move through the contact point. Some charge is transferred to the second object.",
          "Charging by induction happens without direct contact. A charged object is brought close to a conductor. Its electric force makes the electrons inside the conductor move to one side. If the conductor is also connected to the ground, electrons can enter or leave it. The conductor can then keep a net charge after the ground and nearby charged object are removed.",
          "In every charging method, only electrons are transferred. The total charge is still conserved."
        ]
      }
    ]
  },
  "electric-force": {
    number: "02",
    unit: "06",
    title: "The electric force",
    introduction: "Introduction to Coulomb’s law and how to use it.",
    sections: [
      {
        title: "What is electric force?",
        paragraphs: [
          "Electric force is the push or pull between charged objects. The objects do not need to touch. Each charge creates an electric effect in the space around it, so it can exert a force on another charge from a distance.",
          "Charges with the same sign repel. Two positive charges push apart, and two negative charges also push apart. Charges with opposite signs attract, so a positive charge and a negative charge pull toward each other.",
          "Electric force has both a size and a direction. The force acts along the straight line that joins the two charges. Each charge feels a force of the same size, but the two forces point in opposite directions.",
          "A negative electric force means attraction, while a positive electric force means repulsion."
        ]
      },
      {
        title: "Introduction to Coulomb’s law",
        paragraphs: [
          "Coulomb’s law tells us the size of the electric force between two point charges. A point charge is a charged object that is small compared with the distance between the objects.",
          "The force becomes stronger when either charge becomes larger. The force becomes weaker when the distance between the charges becomes larger.",
          "Electric force is inversely proportional to the square of the distance between the charges.",
          "Distance has a very strong effect because it is squared in the formula. For example, if the distance doubles, the force becomes one quarter as large."
        ]
      },
      {
        title: "The Coulomb’s law formula",
        paragraphs: [
          "Use the following formula to calculate the magnitude, or size, of the electric force. The absolute-value signs mean that we use the charge sizes in the calculation. After calculating the magnitude, use the charge signs to decide whether the force is attractive or repulsive."
        ],
        formula: String.raw`F_e=k\frac{\left|q_1q_2\right|}{r^2}`,
        variables: [
          { symbol: String.raw`F_e`, name: "Electric force", meaning: "The size of the force between the two charges." },
          { symbol: String.raw`k`, name: "Coulomb’s constant", meaning: "A constant used for electric force in empty space or air.", example: String.raw`8.99\times10^9\ \mathrm{N\,m^2/C^2}` },
          { symbol: String.raw`q_1`, name: "First charge", meaning: "The electric charge of the first object, measured in coulombs." },
          { symbol: String.raw`q_2`, name: "Second charge", meaning: "The electric charge of the second object, measured in coulombs." },
          { symbol: String.raw`r`, name: "Separation distance", meaning: "The distance from the centre of one charge to the centre of the other, measured in metres." }
        ]
      },
      {
        title: "How to use the formula",
        paragraphs: [
          "First, write down the two charges and the distance between their centres. Convert every charge to coulombs and every distance to metres.",
          "Second, substitute the charge magnitudes and distance into Coulomb’s law. Square the distance, multiply the charge values, and then multiply by Coulomb’s constant.",
          "A negative electric force means attraction, while a positive electric force means repulsion.",
          "Charges with the same sign repel, while charges with opposite signs attract."
        ]
      },
      {
        title: "Simple relationship examples",
        paragraphs: [
          "Charge example: If q₁ doubles while q₂ and r stay unchanged, the electric force doubles.",
          "Second-charge example: If q₂ becomes three times larger while q₁ and r stay unchanged, the electric force becomes three times larger.",
          "Distance example: If r doubles, r² becomes four times larger. The force therefore becomes one quarter as large.",
          "Direction example: +3.0 μC and −2.0 μC attract because their signs are different. +3.0 μC and +2.0 μC repel because their signs are the same.",
          "Force example: A result of 2.5 N describes the force magnitude. The final answer must also state a direction, such as 2.5 N toward the other charge."
        ]
      }
    ]
  },
  "electric-field-strength": {
    number: "03",
    unit: "06",
    title: "Electric field strength",
    introduction: "Learn what an electric field is, how it behaves near charged plates, and how to calculate its strength.",
    sections: [
      {
        title: "What is an electric field?",
        paragraphs: [
          "An electric field is the region around a charged object where another charge can feel an electric force. The two charges do not need to touch.",
          "Every charged object creates an electric field around itself. A larger source charge creates a stronger field. The field becomes weaker as the distance from the source charge increases.",
          "We use a small positive test charge to define field direction. The field points in the direction that this positive test charge would move."
        ],
        fieldDiagram: true,
        fieldSimulator: true
      },
      {
        title: "Electric field versus electric force",
        paragraphs: [
          "An electric field exists around a source charge even when no other charge is present. Electric force appears when another charge is placed inside that field.",
          "Electric field direction is defined by the direction a positive test charge would move.",
          "A positive charge feels force in the same direction as the electric field. A negative charge feels force in the opposite direction to the electric field."
        ]
      },
      {
        title: "Electric field lines",
        paragraphs: [
          "Electric field lines are a simple picture of an electric field. The arrow on each line shows the direction of the field.",
          "Field lines point away from positive charges and toward negative charges.",
          "Lines that are close together show a stronger field. Lines that are farther apart show a weaker field. Electric field lines never cross."
        ]
      },
      {
        title: "Electric fields and parallel plates",
        paragraphs: [
          "Two oppositely charged parallel plates create an electric field in the space between them. The field points from the positive plate to the negative plate.",
          "Near the middle of two large plates, the field lines are straight, parallel, and evenly spaced. This means the electric field has almost the same strength and direction everywhere in that region.",
          "A positive charge feels a force toward the negative plate. A negative charge feels a force toward the positive plate because its force is opposite to the field direction."
        ],
        diagram: true
      },
      {
        title: "What is electric field strength?",
        paragraphs: [
          "Electric field strength tells us how much electric force acts on each coulomb of positive test charge at one point.",
          "A strong electric field produces a large force on a test charge. A weak electric field produces a smaller force on the same test charge.",
          "Electric field strength is a vector. It has both a size and a direction. Its unit is newtons per coulomb, written as N/C."
        ],
        formula: String.raw`E=\frac{F_e}{\left|q\right|}`,
        variables: [
          { symbol: String.raw`E`, name: "Electric field strength", meaning: "The electric force per coulomb at a point, measured in N/C." },
          { symbol: String.raw`F_e`, name: "Electric force", meaning: "The electric force acting on the test charge, measured in newtons." },
          { symbol: String.raw`q`, name: "Test charge", meaning: "The charge placed in the field, measured in coulombs." }
        ]
      },
      {
        title: "Electric field strength formulas",
        paragraphs: [
          "Use the force form when the force on a test charge is known. The same relationship can be rearranged to find force or test charge.",
          "Use the point-charge form when a source charge and its distance from the field point are known. Measure distance from the centre of the source charge.",
          "Use charge magnitudes when calculating field strength. Then state the direction separately: away from a positive source charge or toward a negative source charge."
        ],
        formulaSet: [
          { label: "Field from force", math: String.raw`E=\frac{F_e}{\left|q\right|}` },
          { label: "Force in a field", math: String.raw`F_e=\left|q\right|E` },
          { label: "Test charge", math: String.raw`\left|q\right|=\frac{F_e}{E}` },
          { label: "Field from a point charge", math: String.raw`E=k\frac{\left|Q\right|}{r^2}` },
          { label: "Source charge", math: String.raw`\left|Q\right|=\frac{Er^2}{k}` },
          { label: "Distance from source", math: String.raw`r=\sqrt{\frac{k\left|Q\right|}{E}}` }
        ]
      }
    ]
  },
  "electric-potentials": {
    number: "04",
    unit: "06",
    title: "Electric potentials",
    introduction: "Learn electric potential, electric potential energy, voltage, and their relationship with electric fields.",
    sections: [
      {
        title: "What is electric potential?",
        paragraphs: [
          "Electric potential describes the electric potential energy available at one point for each coulomb of charge.",
          "Potential belongs to a location in an electric field. A charge does not need to be placed there for the potential to exist.",
          "Electric potential is a scalar. It has a size and a sign, but it does not have a direction. Its unit is the volt, written as V. One volt is equal to one joule per coulomb."
        ],
        formula: String.raw`V=\frac{E_p}{q}`,
        variables: [
          { symbol: String.raw`V`, name: "Electric potential", meaning: "Electric potential energy per coulomb at a point, measured in volts." },
          { symbol: String.raw`E_p`, name: "Electric potential energy", meaning: "Energy stored because of a charge’s position, measured in joules." },
          { symbol: String.raw`q`, name: "Charge", meaning: "The charge placed at that point, measured in coulombs." }
        ]
      },
      {
        title: "Electric potential around a point charge",
        paragraphs: [
          "A source charge creates electric potential around itself. A positive source charge creates positive potential, and a negative source charge creates negative potential.",
          "Potential becomes smaller in magnitude as distance from the source charge increases. Because potential is a scalar, potentials from several source charges are added using their positive or negative signs.",
          "Measure r from the centre of the source charge to the point where the potential is being found."
        ],
        formulaSet: [
          { label: "Electric potential", math: String.raw`V=k\frac{Q}{r}` },
          { label: "Source charge", math: String.raw`Q=\frac{Vr}{k}` },
          { label: "Distance from source", math: String.raw`r=k\frac{\left|Q\right|}{\left|V\right|}` }
        ]
      },
      {
        title: "What is electric potential energy?",
        paragraphs: [
          "Electric potential energy is energy stored because of the positions of charged objects.",
          "Two charges with the same sign have positive electric potential energy. They naturally repel and move farther apart. Two charges with opposite signs have negative electric potential energy. They naturally attract and move closer together.",
          "The potential energy between two point charges depends on both charge values and the distance between them. Keep the signs of both charges in this formula."
        ],
        formulaSet: [
          { label: "Potential energy at a potential", math: String.raw`E_p=qV` },
          { label: "Two point charges", math: String.raw`E_p=k\frac{q_1q_2}{r}` }
        ]
      },
      {
        title: "Electric potential difference and voltage",
        paragraphs: [
          "Electric potential difference compares the electric potential at two points. It tells us how much electric potential energy changes for each coulomb of charge moving between those points.",
          "Electric potential difference is also called voltage. We write it as ΔV. The symbol Δ means final value minus initial value.",
          "A voltage of 12 V means that the potential energy changes by 12 joules for every coulomb of charge."
        ],
        formulaSet: [
          { label: "Potential difference", math: String.raw`\Delta V=V_f-V_i` },
          { label: "Voltage from energy", math: String.raw`\Delta V=\frac{\Delta E_p}{q}` },
          { label: "Change in potential energy", math: String.raw`\Delta E_p=q\Delta V` },
          { label: "Charge", math: String.raw`q=\frac{\Delta E_p}{\Delta V}` }
        ]
      },
      {
        title: "The energy-hill model",
        paragraphs: [
          "Think of electric potential as the height of an energy hill. The hill exists even when no charge is placed on it. A higher position represents higher electric potential, and a lower position represents lower electric potential.",
          "Voltage, or potential difference, is the change in height between two points on the hill. Electric potential energy depends on both the hill position and the charge placed there. This is why the relationship is Ep = qV.",
          "Electric field describes the slope of the hill. A steeper slope means a stronger electric field. Electric force is the push or pull felt by a charge placed on that slope.",
          "A positive charge naturally moves downhill toward lower electric potential. A negative charge naturally moves toward higher electric potential. Both motions lower the charge’s electric potential energy."
        ],
        energyHillDiagram: true
      },
      {
        title: "How charges move through voltage",
        paragraphs: [
          "The electric field points from higher electric potential to lower electric potential.",
          "A free positive charge naturally moves in the direction of the electric field. It moves from higher potential to lower potential.",
          "A free negative charge naturally moves opposite to the electric field. It moves from lower potential to higher potential.",
          "When a charge moves naturally because of the electric field, its electric potential energy decreases. The lost potential energy can become kinetic energy."
        ]
      },
      {
        title: "Electric field and voltage between parallel plates",
        paragraphs: [
          "Oppositely charged parallel plates create an almost uniform electric field between them. The positive plate is at higher electric potential, and the negative plate is at lower electric potential.",
          "The electric field points from the positive plate to the negative plate. For a uniform field, field strength equals the magnitude of the voltage difference divided by the plate separation.",
          "Use the magnitude of ΔV when calculating field strength. State the field direction separately. The distance d must be measured in metres."
        ],
        diagram: true,
        formulaSet: [
          { label: "Electric field strength", math: String.raw`E=\frac{\left|\Delta V\right|}{d}` },
          { label: "Voltage difference", math: String.raw`\left|\Delta V\right|=Ed` },
          { label: "Plate separation", math: String.raw`d=\frac{\left|\Delta V\right|}{E}` }
        ]
      }
    ]
  },
  "introduction-to-magnets": {
    number: "01",
    unit: "07",
    title: "Introduction to magnets",
    introduction: "Learn how magnets, electric current, coils, and electromagnets produce magnetic fields.",
    sections: [
      {
        title: "The main idea",
        paragraphs: [
          "Moving electric charges create a magnetic field. Electric current is moving charge, so a wire carrying current creates a magnetic field around itself.",
          "When a wire is bent into loops, the field from each loop adds together. Many loops can produce a strong electromagnet."
        ],
        formulaSet: [
          { label: "Main principle", math: String.raw`\boxed{\text{Moving charge creates a magnetic field}}` },
          { label: "Current in a wire", math: String.raw`\boxed{\text{Current in a wire creates a field around the wire}}` }
        ]
      },
      {
        title: "Permanent magnets and their poles",
        paragraphs: [
          "A bar magnet has a north pole, N, and a south pole, S. Like poles repel, and opposite poles attract.",
          "This is similar to electric charge, but there is one important difference. Positive and negative charges can exist separately. An ordinary magnet always has both poles.",
          "If you cut a magnet in half, you do not separate its poles. You get two smaller magnets, and each new magnet has its own north and south pole."
        ],
        points: ["N and N repel.", "S and S repel.", "N and S attract."],
        formula: String.raw`\boxed{\text{Like poles repel; opposite poles attract}}`
      },
      {
        title: "Magnetic fields and field direction",
        paragraphs: [
          "A magnetic field is the region around a magnet where magnetic forces can act. We draw magnetic field lines to show the field.",
          "Outside a magnet, the field points from north to south. Inside the magnet, it returns from south to north. The lines form complete closed loops.",
          "A compass can find the field direction. The north end of its needle points in the direction of the magnetic field at that location."
        ],
        formulaSet: [
          { label: "Outside a magnet", math: String.raw`N\longrightarrow S` },
          { label: "Inside a magnet", math: String.raw`S\longrightarrow N` }
        ]
      },
      {
        title: "Reading magnetic field lines",
        paragraphs: [
          "The arrow on a field line shows the field direction. The spacing between field lines gives information about field strength.",
          "Lines close together show a stronger field. Lines far apart show a weaker field. A bar magnet is strongest near its poles because the field lines are crowded there.",
          "Magnetic field lines never cross. At one point, the magnetic field can only point in one direction."
        ]
      },
      {
        title: "Iron filings and compasses",
        paragraphs: [
          "Iron filings become tiny temporary magnets near a magnet. They turn and line up with the field, so they show the field's shape and where it is strong.",
          "Iron filings do not clearly show which way the field points. Use a compass to find the direction."
        ]
      },
      {
        title: "Current creates a magnetic field",
        paragraphs: [
          "Oersted placed a compass near a wire. The compass needle moved when current flowed, and returned to normal when the current stopped.",
          "This showed that electric current produces a magnetic field. It was an important connection between electricity and magnetism."
        ],
        formula: String.raw`\boxed{\text{Electric current produces a magnetic field}}`
      },
      {
        title: "Field around a straight wire",
        paragraphs: [
          "The magnetic field around a straight current-carrying wire forms circles centred on the wire. It does not point toward or away from the wire.",
          "The field is stronger close to the wire and weaker farther away. A larger current also produces a stronger field."
        ],
        points: ["Increase current I: the field becomes stronger.", "Increase distance r: the field becomes weaker."],
        formula: String.raw`B\propto\frac{I}{r}`
      },
      {
        title: "Ampère's right-hand rule",
        paragraphs: [
          "Use your right hand to find the field direction around a straight wire. Point your thumb in the direction of conventional current. Your curled fingers show the magnetic field direction.",
          "Conventional current moves from positive to negative through the external circuit. Electrons move in the opposite direction."
        ],
        formulaSet: [
          { label: "Thumb", math: String.raw`\text{Thumb}=\text{current }I` },
          { label: "Curled fingers", math: String.raw`\text{Curled fingers}=\text{magnetic field }B` }
        ]
      },
      {
        title: "Current into and out of the page",
        paragraphs: [
          "A dot means current comes out of the page toward you. Think of it as the pointed tip of an arrow. The magnetic field is counterclockwise.",
          "A cross means current goes into the page away from you. Think of it as the feathers at the back of an arrow. The magnetic field is clockwise."
        ],
        formulaSet: [
          { label: "Out of the page", math: String.raw`\odot\ I\Rightarrow B\text{ counterclockwise}` },
          { label: "Into the page", math: String.raw`\otimes\ I\Rightarrow B\text{ clockwise}` }
        ]
      },
      {
        title: "Why a compass changes direction around a wire",
        paragraphs: [
          "The field circles around the wire. Because of this, the field points in opposite directions on opposite sides of the wire.",
          "The compass's north end always follows the field at its own location. The current has not changed direction; only the direction of the circular field is different at each position."
        ]
      },
      {
        title: "A single loop of wire",
        paragraphs: [
          "Bending a wire into a loop brings the fields from different parts of the wire together. At the centre, many of these fields point in the same direction and add together.",
          "The loop has a north side and a south side, so it acts like a small bar magnet."
        ]
      },
      {
        title: "Right-hand rule for a current loop",
        paragraphs: [
          "Curl the fingers of your right hand in the direction of current around the loop. Your thumb shows the field direction through the centre and points toward the north side.",
          "When you look directly at one side, counterclockwise current makes that side north. Clockwise current makes that side south."
        ],
        formulaSet: [
          { label: "Counterclockwise current", math: String.raw`\text{Counterclockwise}\Rightarrow N` },
          { label: "Clockwise current", math: String.raw`\text{Clockwise}\Rightarrow S` }
        ]
      },
      {
        title: "Solenoids",
        paragraphs: [
          "A solenoid is a long wire wrapped into many loops. Each loop makes a magnetic field.",
          "Inside the solenoid, the fields point mainly in the same direction and add together. The field is strong, almost parallel, and nearly uniform. Uniform means the field has almost the same strength and direction throughout the region.",
          "Outside the solenoid, parts of the fields point in different directions and partly cancel. The outside field is usually weaker. A solenoid behaves like a bar magnet with north and south ends."
        ],
        formula: String.raw`B_{\text{inside}}=B_1+B_2+B_3+\cdots`
      },
      {
        title: "Right-hand rule for a solenoid",
        paragraphs: [
          "Wrap your right-hand fingers in the direction of conventional current around the coils. Your thumb points toward the north end and in the direction of the field inside.",
          "Inside the solenoid, the field goes from south to north. Outside, it returns from north to south.",
          "Looking directly at one end, counterclockwise current means that end is north. Clockwise current means that end is south."
        ],
        formula: String.raw`\boxed{\text{Fingers follow current; thumb points north}}`
      },
      {
        title: "Electromagnets and iron cores",
        paragraphs: [
          "A current-carrying solenoid already acts like a magnet. Adding an iron core inside makes the field much stronger. This combination is called an electromagnet.",
          "The current creates the original field. The field then makes many tiny magnetic regions inside the iron line up. Their fields add to the solenoid's field.",
          "Iron, nickel, and cobalt can become strongly magnetized. These materials are called ferromagnetic materials."
        ],
        formulaSet: [
          { label: "Electromagnet", math: String.raw`\text{Electromagnet}=\text{coil with current}+\text{iron core}` },
          { label: "Stronger total field", math: String.raw`B_{\text{total}}=B_{\text{solenoid}}+B_{\text{iron}}` }
        ]
      },
      {
        title: "Permanent magnets and electromagnets",
        paragraphs: [
          "A permanent magnet stays magnetized and does not need electricity. Its strength and poles are not easy to change.",
          "An electromagnet is mainly magnetic while current flows. Its strength can be changed, and reversing the current switches its north and south poles."
        ],
        points: ["Increase the current.", "Add more turns to the coil.", "Place an iron core inside.", "Wrap the turns closer together."],
        pointLead: "Four ways to make an electromagnet stronger:"
      },
      {
        title: "What happens when current is reversed?",
        paragraphs: [
          "Reversing current reverses the magnetic field. Around a straight wire, the circular field changes direction.",
          "In a loop or solenoid, the north and south poles switch places. This follows from the right-hand rule because the current now points the other way."
        ]
      },
      {
        title: "The complete connection",
        derivation: true,
        paragraphs: [
          "Moving charge creates a magnetic field. Current in a straight wire creates a circular field. Bending the wire into loops makes the fields add.",
          "Many loops form a solenoid with north and south poles. Adding an iron core makes a strong electromagnet."
        ],
        formulaSet: [
          { label: "Step 1", math: String.raw`\text{Moving charge}\Rightarrow\text{magnetic field}` },
          { label: "Step 2", math: String.raw`\text{Straight wire}\Rightarrow\text{circular field}` },
          { label: "Step 3", math: String.raw`\text{Many loops}\Rightarrow\text{solenoid}` },
          { label: "Step 4", math: String.raw`\text{Solenoid+iron}\Rightarrow\text{electromagnet}` }
        ]
      }
    ]
  },
  "magnetic-field-strength": {
    number: "02",
    unit: "07",
    title: "Magnetic field strength B",
    introduction: "Choose and use the three main magnetic force and magnetic field formula families.",
    sections: [
      {
        title: "Choose the formula from the situation",
        paragraphs: [
          "Start by asking what the question describes. A single moving particle, a wire carrying current, and a solenoid use different formulas.",
          "The moving-charge and current-carrying-wire formulas calculate magnetic force. The solenoid formula calculates the magnetic field made by the coil."
        ],
        formulaSet: [
          { label: "One moving charge", math: String.raw`F_B=|q|vB\sin\theta` },
          { label: "Wire carrying current", math: String.raw`F_B=BIL\sin\theta` },
          { label: "Air-core solenoid · μ₀ (mu zero)", math: String.raw`B=\mu_0nI` }
        ]
      },
      {
        title: "Magnetic force on one moving charge",
        paragraphs: [
          "Use this formula for one moving charged particle, such as an electron, proton, or ion.",
          "The angle θ is measured between the velocity v and the magnetic field B. Lowercase v means speed, not voltage.",
          "The formula gives the size of the force. Use a right-hand rule to find its direction. For a negative charge such as an electron, reverse the direction found for a positive charge."
        ],
        formula: String.raw`\boxed{F_B=|q|vB\sin\theta}`,
        variables: [
          { symbol: String.raw`F_B`, name: "Magnetic force", meaning: "Measured in newtons, N." },
          { symbol: String.raw`|q|`, name: "Charge magnitude", meaning: "Measured in coulombs, C. Use the positive size of the charge in the calculation." },
          { symbol: String.raw`v`, name: "Particle speed", meaning: "Measured in metres per second, m/s." },
          { symbol: String.raw`B`, name: "Magnetic field strength", meaning: "Measured in teslas, T." },
          { symbol: String.raw`\theta`, name: "Angle", meaning: "The angle between v and B." }
        ]
      },
      {
        title: "Perpendicular and parallel motion",
        paragraphs: [
          "The magnetic force is largest when the particle moves perpendicular to the field. Perpendicular means θ = 90°, so sin 90° = 1.",
          "There is no magnetic force when the particle moves parallel to the field. Parallel means θ = 0°, so sin 0° = 0.",
          "For every other angle, keep sin θ in the formula and evaluate it with a calculator in degree mode."
        ],
        formulaSet: [
          { label: "Perpendicular: maximum force", math: String.raw`v\perp B\Rightarrow F_B=|q|vB` },
          { label: "Parallel: no force", math: String.raw`v\parallel B\Rightarrow F_B=0` },
          { label: "Any other angle", math: String.raw`F_B=|q|vB\sin\theta` }
        ]
      },
      {
        title: "Rearranging the moving-charge formula",
        paragraphs: [
          "These rearranged forms assume the particle moves perpendicular to the field. If the question gives another angle, include sin θ in the denominator when rearranging."
        ],
        formulaSet: [
          { label: "Find field strength", math: String.raw`B=\frac{F_B}{|q|v}` },
          { label: "Find speed", math: String.raw`v=\frac{F_B}{|q|B}` },
          { label: "Find charge magnitude", math: String.raw`|q|=\frac{F_B}{vB}` },
          { label: "Find B with an angle", math: String.raw`B=\frac{F_B}{|q|v\sin\theta}` }
        ]
      },
      {
        title: "Example: force on a proton",
        derivation: true,
        paragraphs: [
          "A proton moves at 2.0 × 10⁶ m/s through a 0.30 T field. Its charge magnitude is 1.60 × 10⁻¹⁹ C, and it moves perpendicular to the field.",
          "Because v is perpendicular to B, use the shorter form. Multiply the charge, speed, and field strength."
        ],
        formulaSet: [
          { label: "Select the formula", math: String.raw`F_B=|q|vB` },
          { label: "Substitute", math: String.raw`F_B=(1.60\times10^{-19})(2.0\times10^6)(0.30)` },
          { label: "Answer", math: String.raw`\boxed{F_B=9.6\times10^{-14}\ \mathrm{N}}` }
        ]
      },
      {
        title: "Magnetic force on a current-carrying wire",
        paragraphs: [
          "Use this formula for a whole wire carrying current inside an external magnetic field.",
          "The length L is only the part of the wire inside the magnetic field. The angle θ is measured between the conventional-current direction and the magnetic field.",
          "This formula gives the size of the force. Use the right-hand motor rule to find the direction."
        ],
        formula: String.raw`\boxed{F_B=BIL\sin\theta}`,
        variables: [
          { symbol: String.raw`F_B`, name: "Magnetic force", meaning: "Measured in newtons, N." },
          { symbol: String.raw`B`, name: "Magnetic field strength", meaning: "Measured in teslas, T." },
          { symbol: String.raw`I`, name: "Conventional current", meaning: "Measured in amperes, A." },
          { symbol: String.raw`L`, name: "Wire length in the field", meaning: "Measured in metres, m." },
          { symbol: String.raw`\theta`, name: "Angle", meaning: "The angle between I and B." }
        ]
      },
      {
        title: "Wire perpendicular or parallel to the field",
        paragraphs: [
          "The force is largest when the wire and field are perpendicular. In this case, θ = 90° and the sine factor becomes 1.",
          "The force is zero when the wire and field are parallel. In this case, θ = 0° and the sine factor becomes 0."
        ],
        formulaSet: [
          { label: "Perpendicular: maximum force", math: String.raw`I\perp B\Rightarrow F_B=BIL` },
          { label: "Parallel: no force", math: String.raw`I\parallel B\Rightarrow F_B=0` },
          { label: "Any other angle", math: String.raw`F_B=BIL\sin\theta` }
        ]
      },
      {
        title: "Rearranging the wire-force formula",
        paragraphs: [
          "These shorter rearrangements are for a wire perpendicular to the field. Include sin θ in the denominator if the wire is at another angle."
        ],
        formulaSet: [
          { label: "Find field strength", math: String.raw`B=\frac{F_B}{IL}` },
          { label: "Find current", math: String.raw`I=\frac{F_B}{BL}` },
          { label: "Find wire length", math: String.raw`L=\frac{F_B}{BI}` },
          { label: "Find B with an angle", math: String.raw`B=\frac{F_B}{IL\sin\theta}` }
        ]
      },
      {
        title: "Example: force on a wire",
        derivation: true,
        paragraphs: [
          "A 0.50 m section of wire carries 2.0 A through a 0.40 T magnetic field. The wire is perpendicular to the field.",
          "Because I is perpendicular to B, use F_B = BIL."
        ],
        formulaSet: [
          { label: "Select the formula", math: String.raw`F_B=BIL` },
          { label: "Substitute", math: String.raw`F_B=(0.40)(2.0)(0.50)` },
          { label: "Answer", math: String.raw`\boxed{F_B=0.40\ \mathrm{N}}` }
        ]
      },
      {
        title: "Magnetic field inside an air-core solenoid",
        paragraphs: [
          "This formula does not calculate force. It calculates the magnetic field made inside a long solenoid.",
          "An air-core solenoid has no magnetic material inside. The field becomes stronger when the current increases or when there are more turns in each metre."
        ],
        formula: String.raw`\boxed{B=\mu_0nI}`,
        variables: [
          { symbol: String.raw`B`, name: "Magnetic field strength", meaning: "Measured in teslas, T." },
          { symbol: String.raw`\mu_0`, name: "Permeability of free space", meaning: "A constant used for an air-core solenoid." },
          { symbol: String.raw`n`, name: "Turns per metre", meaning: "The number of coil turns in each metre, measured in turns/m." },
          { symbol: String.raw`I`, name: "Current", meaning: "Measured in amperes, A." }
        ],
        formulaSet: [
          { label: "Constant", math: String.raw`\mu_0=4\pi\times10^{-7}\ \mathrm{T\cdot m/A}` },
          { label: "Turns per metre", math: String.raw`n=\frac{N}{L}` }
        ]
      },
      {
        title: "All air-core solenoid forms",
        paragraphs: [
          "Use B = μ₀nI when the question gives turns per metre. If it gives the total number of turns N and solenoid length L, first calculate n = N/L or use the combined form.",
          "In the solenoid formulas, uppercase N means total number of turns. Lowercase n means turns per metre."
        ],
        formulaSet: [
          { label: "Using turns per metre", math: String.raw`B=\mu_0nI` },
          { label: "Find turns per metre", math: String.raw`n=\frac{N}{L}` },
          { label: "Using total turns and length", math: String.raw`B=\frac{\mu_0NI}{L}` },
          { label: "Find current", math: String.raw`I=\frac{B}{\mu_0n}` }
        ]
      },
      {
        title: "Example: air-core solenoid",
        derivation: true,
        paragraphs: [
          "A solenoid has 500 turns, a length of 0.25 m, and a current of 2.0 A. Find the field inside.",
          "The question gives N and L, so use the combined form."
        ],
        formulaSet: [
          { label: "Select the formula", math: String.raw`B=\frac{\mu_0NI}{L}` },
          { label: "Substitute", math: String.raw`B=\frac{(4\pi\times10^{-7})(500)(2.0)}{0.25}` },
          { label: "Answer", math: String.raw`\boxed{B\approx5.0\times10^{-3}\ \mathrm{T}}` }
        ]
      },
      {
        title: "Solenoid with a magnetic core",
        paragraphs: [
          "A magnetic material such as iron makes the field much stronger. Replace μ₀ with the permeability μ of the material.",
          "Relative permeability μᵣ tells you how strongly the material increases the field compared with empty space."
        ],
        formulaSet: [
          { label: "Material permeability", math: String.raw`\mu=\mu_0\mu_r` },
          { label: "Using turns per metre", math: String.raw`B=\mu nI=\mu_0\mu_rnI` },
          { label: "Using total turns", math: String.raw`B=\frac{\mu_0\mu_rNI}{L}` },
          { label: "Main idea", math: String.raw`\boxed{\text{Iron core}\Rightarrow\text{much stronger }B}` }
        ]
      },
      {
        title: "Final formula check",
        paragraphs: [
          "Look for the object described in the question. Then check whether the object and magnetic field are perpendicular or at another angle.",
          "Keep every value in SI units: charge in coulombs, speed in m/s, field in teslas, current in amperes, length in metres, and force in newtons."
        ],
        points: [
          "One electron, proton, or ion: use F_B = |q|vB sin θ.",
          "A wire carrying current: use F_B = BIL sin θ.",
          "The field made by a solenoid: use B = μ₀nI.",
          "qvB and BIL calculate force. μ₀nI calculates magnetic field."
        ]
      }
    ]
  },
  "magnetic-field-and-the-electron": {
    number: "03",
    unit: "07",
    title: "Magnetic field and the electron",
    introduction: "Learn how magnetic fields bend moving charges and how a mass spectrometer measures particle mass.",
    sections: [
      {
        title: "Magnetic force on a moving electron",
        paragraphs: [
          "A magnetic field can push a charge only when the charge is moving. The force depends on the charge, speed, field strength, and angle between the velocity and field.",
          "The magnetic force is largest when the electron moves perpendicular to the field. It is zero when the electron moves parallel to the field.",
          "Use the right-hand rule as if the moving charge were positive. Because an electron is negative, its actual force points in the opposite direction."
        ],
        formulaSet: [
          { label: "General form", math: String.raw`F_B=|q|vB\sin\theta` },
          { label: "Perpendicular motion", math: String.raw`F_B=|q|vB` },
          { label: "Parallel motion", math: String.raw`F_B=0` }
        ]
      },
      {
        title: "Why the path becomes circular",
        derivation: true,
        paragraphs: [
          "When a charge enters a magnetic field at 90°, the force is always perpendicular to its velocity. The force changes the direction of motion but does not change the speed.",
          "A force that always points sideways acts as a centripetal force. The particle follows a circular path.",
          "A stronger field makes the circle smaller. A faster or more massive particle makes the circle larger. Positive and negative charges curve in opposite directions."
        ],
        formulaSet: [
          { label: "Magnetic force", math: String.raw`F_B=|q|vB` },
          { label: "Centripetal force", math: String.raw`F_c=\frac{mv^2}{R}` },
          { label: "For circular motion", math: String.raw`|q|vB=\frac{mv^2}{R}` },
          { label: "Radius", math: String.raw`R=\frac{mv}{|q|B}` }
        ]
      },
      {
        title: "Electron-beam deflection on a CRT screen",
        paragraphs: [
          "Without a magnetic field, the electron beam would normally hit the centre of the CRT screen.",
          "When a magnetic field is applied, it pushes the moving electrons sideways. In this example, the beam bends upward and hits the screen above the centre.",
          "The distance from the centre of the screen to the new spot is called the deflection, δ. A larger δ means the electron beam bends more.",
          "For the same CRT shape and a small deflection, δ is directly proportional to the magnetic field strength and the magnitude of the charge. It is inversely proportional to the particle's mass and speed."
        ],
        formulaSet: [
          { label: "Meaning of deflection", math: String.raw`\delta=\text{distance from the centre to the new beam spot}` },
          { label: "Magnetic field strength", math: String.raw`\delta\propto B` },
          { label: "Electron speed", math: String.raw`\delta\propto\frac{1}{v}` },
          { label: "Charge magnitude", math: String.raw`\delta\propto |q|` },
          { label: "Particle mass", math: String.raw`\delta\propto\frac{1}{m}` }
        ],
        points: [
          "Stronger magnetic field, B → larger δ. The beam bends more.",
          "Higher electron speed, v → smaller δ. The fast electron is harder to turn and spends less time in the field.",
          "Larger charge magnitude, |q| → larger δ. The magnetic force is larger.",
          "Larger particle mass, m → smaller δ. A heavier particle is harder to turn.",
          "Longer magnetic-field region → larger δ. The force acts on the beam for more time.",
          "Greater distance from the field region to the screen → larger δ. The angled beam has more distance to move sideways."
        ]
      },
      {
        title: "The velocity selector",
        derivation: true,
        paragraphs: [
          "A velocity selector uses an electric field and a magnetic field at the same time. The fields are arranged so the electric force and magnetic force point in opposite directions.",
          "Only particles with one exact speed travel straight through. For those particles, the electric and magnetic forces have the same size and cancel.",
          "Particles that are too fast or too slow bend away and do not pass through the selector."
        ],
        formulaSet: [
          { label: "Balanced forces", math: String.raw`F_E=F_B` },
          { label: "Substitute the force formulas", math: String.raw`|q|E=|q|vB_1` },
          { label: "Selected speed", math: String.raw`\boxed{v=\frac{E}{B_1}}` }
        ],
        points: [
          "E is the electric field strength in N/C.",
          "B₁ is the magnetic field in the velocity selector, in T.",
          "The charge cancels, so the selected speed does not depend on the particle's charge."
        ]
      },
      {
        title: "Example: selected velocity",
        derivation: true,
        paragraphs: [
          "A velocity selector has an electric field of 3.0 × 10⁴ N/C and a magnetic field B₁ of 0.20 T. Find the speed of particles that pass straight through."
        ],
        formulaSet: [
          { label: "Formula", math: String.raw`v=\frac{E}{B_1}` },
          { label: "Substitute", math: String.raw`v=\frac{3.0\times10^4}{0.20}` },
          { label: "Answer", math: String.raw`\boxed{v=1.5\times10^5\ \mathrm{m/s}}` }
        ]
      },
      {
        title: "What is a mass spectrometer?",
        paragraphs: [
          "A mass spectrometer separates particles by mass. The particles are first given a charge and sent through a velocity selector.",
          "The velocity selector makes sure the particles entering the next region have the same speed. They then enter a second magnetic field, B₂, and follow circular paths.",
          "The radius of each path is measured. A larger mass produces a larger radius when charge, speed, and field strength stay the same."
        ],
        points: [
          "Stage 1: particles are ionized, so they have charge q.",
          "Stage 2: crossed E and B₁ fields select one speed.",
          "Stage 3: field B₂ bends the particles into circles.",
          "Stage 4: the measured radius R is used to calculate mass."
        ]
      },
      {
        title: "Finding mass from the circular path",
        derivation: true,
        paragraphs: [
          "Inside the analyzing field B₂, magnetic force supplies the centripetal force. Start by setting the two force expressions equal.",
          "Cancel one factor of v and rearrange to isolate mass. Use the magnitude of the charge in the calculation."
        ],
        formulaSet: [
          { label: "Set the forces equal", math: String.raw`|q|vB_2=\frac{mv^2}{R}` },
          { label: "Mass using known speed", math: String.raw`m=\frac{|q|B_2R}{v}` },
          { label: "Velocity selector", math: String.raw`v=\frac{E}{B_1}` },
          { label: "Combined mass formula", math: String.raw`\boxed{m=\frac{B_1B_2|q|R}{E}}` }
        ]
      },
      {
        title: "Example: mass measured by a spectrometer",
        derivation: true,
        paragraphs: [
          "A singly charged positive ion passes through fields E = 3.0 × 10⁴ N/C and B₁ = 0.20 T. It then curves with radius R = 0.10 m in B₂ = 0.50 T. Its charge is 1.60 × 10⁻¹⁹ C.",
          "The question gives both magnetic fields, the electric field, charge, and radius, so use the combined formula."
        ],
        formulaSet: [
          { label: "Formula", math: String.raw`m=\frac{B_1B_2|q|R}{E}` },
          { label: "Substitute", math: String.raw`m=\frac{(0.20)(0.50)(1.60\times10^{-19})(0.10)}{3.0\times10^4}` },
          { label: "Answer", math: String.raw`\boxed{m=5.3\times10^{-26}\ \mathrm{kg}}` }
        ]
      },
      {
        title: "Charge-to-mass ratio",
        paragraphs: [
          "Sometimes the goal is to find charge divided by mass instead of mass alone. Start with magnetic force equal to centripetal force and rearrange.",
          "For an electron, use e for the magnitude of its charge. The result e/m is positive because e means the positive magnitude 1.60 × 10⁻¹⁹ C."
        ],
        formulaSet: [
          { label: "General charge-to-mass ratio", math: String.raw`\frac{|q|}{m}=\frac{v}{BR}` },
          { label: "For an electron", math: String.raw`\boxed{\frac{e}{m}=\frac{v}{BR}}` },
          { label: "Electron charge magnitude", math: String.raw`e=1.60\times10^{-19}\ \mathrm{C}` }
        ]
      },
      {
        title: "Which formula should you use?",
        paragraphs: [
          "Read what the question asks for and identify which part of the device is being described. B₁ belongs to the velocity selector. B₂ belongs to the region where the particle curves.",
          "Keep all values in SI units: E in N/C, B in T, charge in C, radius in m, speed in m/s, and mass in kg."
        ],
        points: [
          "Find the selected speed: v = E/B₁.",
          "Find mass when speed is known: m = |q|B₂R/v.",
          "Find mass using the complete spectrometer: m = B₁B₂|q|R/E.",
          "Find charge-to-mass ratio: |q|/m = v/(BR).",
          "Find electron charge-to-mass ratio: e/m = v/(BR)."
        ]
      }
    ]
  },
  "right-hand-rules": {
    number: "04",
    unit: "07",
    title: "The right-hand rules",
    introduction: "Choose the correct right-hand rule for magnetic fields, solenoids, and magnetic force.",
    sections: [
      {
        title: "The three right-hand rules",
        paragraphs: [
          "The three right-hand rules answer different questions. First identify whether you need a magnetic field direction, a solenoid pole, or a magnetic force direction.",
          "Conventional current is the direction a positive charge would move. Electrons move in the opposite direction. If a question gives electron motion, reverse it once to get conventional current before using the rule. If current is already given, use it directly."
        ],
        ruleGroups: [
          { title: "Ampère rule", mapping: "Current → magnetic field", href: "/simulators/unit-7#ampere-rule", linkText: "Open the Ampère-rule simulator", text: "Use this for the field around a straight wire. Point your right thumb with conventional current. Your curled fingers show the circular magnetic-field direction." },
          { title: "Solenoid rule", mapping: "Coil current → north pole and internal magnetic field", href: "/simulators/unit-7#solenoid-rule", linkText: "Open the solenoid-rule simulator", text: "Curl your right-hand fingers with conventional current around the coils. Your thumb points toward the north pole and in the direction of the magnetic field inside the solenoid." },
          { title: "Motor rule", mapping: "Current or moving charge + magnetic field → magnetic force", href: "/simulators/unit-7#motor-rule", linkText: "Open the motor-rule simulator", text: "Point your right thumb with conventional current, or with the motion of a positive charge. Point your fingers with the magnetic field. Your palm shows the magnetic-force direction." }
        ],
        points: [
          "Electron motion and conventional current always point in opposite directions.",
          "If electrons move out of the page, conventional current goes into the page.",
          "If electrons move left, conventional current goes right.",
          "Do not reverse a direction twice. Convert electron motion once, then use the rule normally.",
          "A stationary charge has no magnetic force.",
          "Magnetic force is perpendicular to both motion and magnetic field, so it often bends a particle's path.",
          "Reversing current while keeping B unchanged reverses the magnetic force."
        ]
      }
    ]
  },
  "induced-electromotive-force": {
    number: "01",
    unit: "08",
    title: "Induced electromotive force (EMF)",
    introduction: "Learn how moving conductors and changing magnetic conditions produce voltage, current, and electrical energy.",
    sections: [
      {
        title: "The main idea",
        paragraphs: [
          "Electricity can create magnetism, and movement through magnetism can create electricity.",
          "You already learned that electric current creates a magnetic field. In this lesson, you will study the reverse idea: a magnetic field can push charges in a moving wire and produce a voltage.",
          "To induce EMF means to produce a voltage by using magnetism. A magnet can move near a wire or coil, the wire can move through a magnetic field, or the magnetic field itself can change.",
          "In each case, the changing magnetic situation pushes charges in the conductor. Positive and negative charges separate, so the two ends of the wire develop different electric potentials. This is the induced EMF.",
          "You might observe a voltmeter needle move or see a voltage reading appear. If the wire is part of a complete circuit, the induced voltage can make current flow. If the circuit is open, a voltage can still exist, but there is no continuous current."
        ],
        formulaSet: [
          {label:"Simple meaning",math:String.raw`\boxed{\text{magnet moves or field changes}\rightarrow\text{charges are pushed}\rightarrow\text{voltage is produced}}`},
          {label:"In a closed circuit",math:String.raw`\boxed{\text{induced EMF}\rightarrow\text{current can flow}}`}
        ]
      },
      {
        title: "What is induced EMF?",
        paragraphs: [
          "EMF stands for electromotive force. Despite its name, EMF is not a force. It is a voltage, or potential difference, produced by electromagnetic induction.",
          "EMF is basically voltage created by a source. In this chapter, EMF usually means the voltage created when a wire moves through a magnetic field or when magnetic flux changes.",
          "EMF is measured in volts, V. If the conductor is part of a complete circuit, the induced EMF can produce an electric current.",
          "A wire that is sitting still in a steady magnetic field does not normally have an induced EMF. The conductor must move across the field, or the magnetic conditions through a circuit must change."
        ],
        formulaSet: [
          {label:"Simple definition",math:String.raw`\boxed{\text{EMF}=\text{created voltage}}`},
          {label:"Unit",math:String.raw`\varepsilon=\text{induced EMF in volts (V)}`},
          {label:"Complete circuit",math:String.raw`\boxed{\text{induced EMF}\rightarrow\text{possible current}}`}
        ]
      },
      {
        title: "EMF compared with induced EMF",
        paragraphs: [
          "EMF is the general idea of a source giving charges an electrical push. This push is a voltage, not a mechanical force.",
          "Induced EMF is a specific type of EMF. It is produced when a conductor moves through a magnetic field or when the magnetic flux through a circuit changes.",
          "Induced EMF pushes charges in the wire. If the wire forms a complete circuit, this voltage can produce an electric current."
        ],
        termChart: [
          {term:"EMF",source:"Any voltage source",example:"A battery uses chemical reactions"},
          {term:"Induced EMF",source:"Changing magnetic situation",example:"A generator moves wire through a magnetic field"}
        ],
        formulaSet: [
          {label:"General idea",math:String.raw`\boxed{\text{EMF}=\text{electrical push}}`},
          {label:"Specific type",math:String.raw`\boxed{\text{induced EMF}=\text{electrical push created by changing magnetism}}`},
          {label:"What it can do",math:String.raw`\boxed{\text{induced EMF}\rightarrow\text{pushes charges}\rightarrow\text{current in a closed circuit}}`}
        ],
        points: [
          "A battery provides EMF through chemical reactions.",
          "A generator provides induced EMF through electromagnetic induction.",
          "Every induced EMF is an EMF, but not every EMF is produced by magnetism."
        ]
      },
      {
        title: "Why a moving wire produces EMF",
        paragraphs: [
          "When the whole wire moves, the charges inside it move with the wire. A magnetic field then exerts a magnetic force on those moving charges.",
          "Positive and negative charges are pushed toward opposite ends of the conductor. This charge separation creates a potential difference between the two ends.",
          "For example, suppose the wire moves down while the magnetic field points right. The right-hand motor rule gives an outward force for a positive charge. Electrons are negative, so they are pushed into the page."
        ],
        formulaSet: [
          {label:"Magnetic force",math:String.raw`F_B=|q|vB\sin\theta`},
          {label:"The induction chain",math:String.raw`\boxed{\text{motion}\rightarrow\text{force on charges}\rightarrow\text{charge separation}\rightarrow\text{EMF}}`}
        ],
        points: [
          "Use the right-hand rule to find the force on a positive charge.",
          "Reverse that force direction for an electron.",
          "The separated charges create the induced voltage."
        ]
      },
      {
        title: "The conductor must cut across the field",
        paragraphs: [
          "A conductor does not produce EMF only because it is inside a magnetic field. Its motion must have a component across the magnetic-field lines.",
          "Perpendicular motion gives the greatest EMF. Parallel motion gives no EMF because the magnetic force on the charges is zero."
        ],
        formulaSet: [
          {label:"Maximum effect",math:String.raw`v\perp B\Rightarrow\varepsilon=\varepsilon_{\max}`},
          {label:"No induction",math:String.raw`v\parallel B\Rightarrow\varepsilon=0`},
          {label:"Why parallel motion gives zero",math:String.raw`F_B=|q|vB\sin0^\circ=0`}
        ]
      },
      {
        title: "EMF in a straight wire",
        paragraphs: [
          "Use ε = Blv when the wire, its motion, and the magnetic field are perpendicular in the required directions.",
          "Use the sine form when the velocity makes an angle θ with the magnetic field."
        ],
        formulaSet: [
          {label:"Perpendicular case",math:String.raw`\boxed{\varepsilon=Blv}`},
          {label:"At an angle",math:String.raw`\boxed{\varepsilon=Blv\sin\theta}`}
        ],
        variables: [
          {symbol:String.raw`\varepsilon`,name:"Induced EMF",meaning:"The induced voltage, measured in volts (V)."},
          {symbol:String.raw`B`,name:"Magnetic field strength",meaning:"Measured in teslas (T)."},
          {symbol:String.raw`l`,name:"Wire length",meaning:"The length of wire inside the magnetic field, measured in metres (m)."},
          {symbol:String.raw`v`,name:"Wire speed",meaning:"The speed of the conductor, measured in metres per second (m/s)."},
          {symbol:String.raw`\theta`,name:"Angle",meaning:"The angle between the wire's velocity and the magnetic field."}
        ],
        points: [
          "Stronger B produces more EMF: ε ∝ B.",
          "A longer wire produces more EMF: ε ∝ l.",
          "Faster motion produces more EMF: ε ∝ v.",
          "Stronger field + longer wire + faster movement = more EMF."
        ]
      },
      {
        title: "Example 1: find the wire's speed",
        derivation: true,
        paragraphs: [
          "A 0.25 m wire moves perpendicularly through a 0.50 T magnetic field and produces an EMF of 1.0 V. Find its speed."
        ],
        formulaSet: [
          {label:"Start with the formula",math:String.raw`\varepsilon=Blv`},
          {label:"Rearrange for speed",math:String.raw`v=\frac{\varepsilon}{Bl}`},
          {label:"Substitute",math:String.raw`v=\frac{1.0}{(0.50)(0.25)}`},
          {label:"Answer",math:String.raw`\boxed{v=8.0\ \mathrm{m/s}}`}
        ]
      },
      {
        title: "Example 2: voltage across airplane wings",
        derivation: true,
        paragraphs: [
          "An airplane travels at 250 m/s through Earth's 5.0 × 10⁻⁵ T magnetic field. Its wingspan is 30.0 m, and the motion is perpendicular to the field. Find the EMF between its wing tips."
        ],
        formulaSet: [
          {label:"Formula",math:String.raw`\varepsilon=Blv`},
          {label:"Substitute",math:String.raw`\varepsilon=(5.0\times10^{-5})(30.0)(250)`},
          {label:"Answer",math:String.raw`\boxed{\varepsilon=0.375\ \mathrm V\approx0.38\ \mathrm V}`}
        ]
      },
      {
        title: "Example 3: a short moving wire",
        derivation: true,
        paragraphs: [
          "A 15 cm wire moves at 5.0 m/s through a 0.040 T field. The motion is perpendicular to the field. First convert 15 cm to 0.15 m."
        ],
        formulaSet: [
          {label:"Convert the length",math:String.raw`l=15\ \mathrm{cm}=0.15\ \mathrm m`},
          {label:"Substitute",math:String.raw`\varepsilon=(0.040)(0.15)(5.0)`},
          {label:"Answer",math:String.raw`\boxed{\varepsilon=0.030\ \mathrm V}`}
        ]
      },
      {
        title: "From a moving wire to a generator",
        paragraphs: [
          "A simple generator places a loop of wire between north and south magnetic poles. The magnetic field outside the magnets points from north to south.",
          "When the loop rotates, its sides move through the magnetic field and an EMF is induced. The generator changes mechanical energy into electrical energy."
        ],
        formulaSet: [
          {label:"Energy change",math:String.raw`\boxed{\text{mechanical rotation}\rightarrow\text{electrical energy}}`}
        ]
      },
      {
        title: "Why a generator's EMF changes",
        paragraphs: [
          "As the loop rotates, the wire does not cut across the field equally well at every position. The induced EMF therefore changes continuously.",
          "A positive or negative sign shows the direction of the EMF. A negative EMF means the direction has reversed; it does not mean there is less EMF.",
          "Because the direction reverses every half-turn, a simple rotating generator produces alternating current, AC."
        ],
        formulaSet: [
          {label:"Rotation pattern",math:String.raw`0\rightarrow+\varepsilon_{\max}\rightarrow0\rightarrow-\varepsilon_{\max}\rightarrow0`},
          {label:"Angle relationship",math:String.raw`\boxed{\varepsilon=\varepsilon_{\max}\sin\theta}`}
        ],
        points: [
          "0°: ε = 0",
          "90°: ε = +εmax",
          "180°: ε = 0",
          "270°: ε = −εmax",
          "360°: ε = 0"
        ]
      },
      {
        title: "Generator formulas",
        paragraphs: [
          "For one straight segment moving at an angle, use ε = Blv sin θ.",
          "In the simple rectangular-loop model used here, two sides cut through the field. If the coil has N turns, all the induced voltages add together."
        ],
        formulaSet: [
          {label:"One segment",math:String.raw`\varepsilon=Blv\sin\theta`},
          {label:"One loop with two active sides",math:String.raw`\varepsilon=2Blv\sin\theta`},
          {label:"Coil with N turns",math:String.raw`\boxed{\varepsilon=2NBlv\sin\theta}`},
          {label:"Maximum magnitude",math:String.raw`\boxed{|\varepsilon_{\max}|=2NBlv}`}
        ],
        points: [
          "More turns, N → more EMF.",
          "Stronger field, B → more EMF.",
          "Longer active wire, l → more EMF.",
          "Faster wire speed, v → more EMF."
        ]
      },
      {
        title: "Lenz's law",
        paragraphs: [
          "Lenz's law states that an induced electric current flows in a direction that opposes the change in magnetic flux which produced it.",
          "If the magnetic flux through a coil increases, the induced current creates a field that fights the increase. If the flux decreases, the induced current creates a field that tries to replace the lost flux.",
          "A simple way to think about it is that the coil tries to keep the magnetic situation from changing.",
          "Lenz's law also follows conservation of energy. You must do work to move the magnet against the coil's magnetic response. That work becomes electrical energy. Without this opposition, the system could produce energy without any input, which is impossible."
        ],
        formulaSet: [
          {label:"Main rule",math:String.raw`\boxed{\text{induced current opposes the change that produced it}}`},
          {label:"Approaching magnet",math:String.raw`\boxed{\text{approaching}\rightarrow\text{repel}}`},
          {label:"Leaving magnet",math:String.raw`\boxed{\text{leaving}\rightarrow\text{attract}}`}
        ],
        points: [
          "Flux increasing → the induced field fights the increase.",
          "Flux decreasing → the induced field tries to replace the decrease.",
          "The opposition prevents free energy and follows conservation of energy."
        ]
      },
      {
        title: "Magnet and coil cases",
        paragraphs: [
          "When a pole approaches a coil, the near end of the coil becomes the same pole so that it repels the magnet.",
          "For example, pushing a magnet's north pole toward a loop makes the near side of the loop become north. The two north poles repel, so the loop fights the approaching motion.",
          "When a pole moves away, the near end becomes the opposite pole so that it attracts the magnet back.",
          "For example, pulling a north pole away makes the near side of the loop become south. The south side attracts the north pole and tries to keep it close."
        ],
        points: [
          "North approaching → coil's near end becomes north.",
          "North leaving → coil's near end becomes south.",
          "South approaching → coil's near end becomes south.",
          "South leaving → coil's near end becomes north."
        ]
      },
      {
        title: "Find the induced current direction",
        paragraphs: [
          "After Lenz's law tells you whether the near end of the coil is north or south, use the solenoid right-hand rule to find the current.",
          "When you look directly at one end of the coil, counterclockwise current makes that end north. Clockwise current makes that end south."
        ],
        formulaSet: [
          {label:"North end",math:String.raw`\boxed{\text{counterclockwise current}\Rightarrow N}`},
          {label:"South end",math:String.raw`\boxed{\text{clockwise current}\Rightarrow S}`}
        ]
      },
      {
        title: "EMF proportionalities",
        paragraphs: [
          "These proportionalities show how changing one variable changes the induced EMF while the other variables stay constant.",
          "The relationships with B, l, v, and N are direct. Doubling one of them doubles the EMF. The angle relationship depends on sin θ."
        ],
        formulaSet: [
          {label:"Magnetic field strength",math:String.raw`\varepsilon\propto B`},
          {label:"Active wire length",math:String.raw`\varepsilon\propto l`},
          {label:"Wire speed",math:String.raw`\varepsilon\propto v`},
          {label:"Number of coil turns",math:String.raw`\varepsilon\propto N`},
          {label:"Angle",math:String.raw`\varepsilon\propto\sin\theta`}
        ],
        points: [
          "Stronger magnetic field → larger EMF.",
          "Longer wire inside the field → larger EMF.",
          "Faster movement → larger EMF.",
          "More coil turns → larger total EMF.",
          "Perpendicular motion gives maximum EMF; parallel motion gives zero EMF."
        ]
      },
      {
        title: "Keep the direction rules separate",
        paragraphs: [
          "For a moving straight wire, use the magnetic-force right-hand rule with velocity and magnetic field. It gives the force on positive charge; electrons move in the opposite direction.",
          "For a magnet moving near a coil, use Lenz's law first to find the coil's pole. Then use the solenoid right-hand rule to find the current.",
          "Do not use the magnetic-force rule by itself to decide the pole in a Lenz's-law question."
        ],
        points: [
          "Moving wire: v and B → magnetic force on charges → charge separation → EMF.",
          "Magnet and coil: Lenz's law → induced north or south pole → solenoid right-hand rule → current direction.",
          "Generator: rotating coil → changing direction and size of EMF → alternating current."
        ]
      }
    ]
  },
  "magnetic-flux-and-faradays-law": {
    number: "02",
    unit: "08",
    title: "Magnetic flux and Faraday's law of induction",
    introduction: "Learn what magnetic flux is and why a change in magnetic flux produces an induced EMF.",
    sections: [
      {
        title: "What is magnetic flux?",
        paragraphs: [
          "Magnetic flux describes how much magnetic field passes through a surface, such as the area inside a wire loop.",
          "You can imagine magnetic-field lines passing through the loop. More field passing through the loop means more magnetic flux.",
          "Magnetic flux uses the symbol Φ, the Greek letter phi. Its unit is the weber, Wb."
        ],
        formulaSet: [
          {label:"Symbol and unit",math:String.raw`\Phi=\text{magnetic flux, measured in webers (Wb)}`},
          {label:"Magnetic flux",math:String.raw`\boxed{\Phi=BA\cos\theta}`}
        ],
        variables: [
          {symbol:String.raw`\Phi`,name:"Magnetic flux",meaning:"The amount of magnetic field passing through the surface, measured in webers (Wb)."},
          {symbol:String.raw`B`,name:"Magnetic field strength",meaning:"The magnetic field strength, measured in teslas (T)."},
          {symbol:String.raw`A`,name:"Area",meaning:"The area inside the loop, measured in square metres (m²)."},
          {symbol:String.raw`\theta`,name:"Angle",meaning:"The angle between the magnetic field and the line perpendicular to the loop."}
        ]
      },
      {
        title: "How the angle changes magnetic flux",
        paragraphs: [
          "The angle θ is measured between the magnetic field and an imaginary line that points straight out from the loop. This line is called the normal.",
          "Flux is maximum when the magnetic field points through the face of the loop. Flux is zero when the field runs along the surface of the loop."
        ],
        formulaSet: [
          {label:"Field through the loop",math:String.raw`\theta=0^\circ\Rightarrow\Phi=BA`},
          {label:"Field along the loop",math:String.raw`\theta=90^\circ\Rightarrow\Phi=0`}
        ]
      },
      {
        title: "What can change magnetic flux?",
        paragraphs: [
          "Magnetic flux changes when the field strength, loop area, or angle changes. It can also change when a magnet or coil moves so that a different amount of field passes through the loop.",
          "An induced EMF appears only while the magnetic flux is changing."
        ],
        points: [
          "Change the current in a source coil → B changes → flux changes → EMF is induced.",
          "Move a magnet toward or away from a coil → flux changes → EMF is induced.",
          "Move or rotate the coil → its position or angle changes → flux changes → EMF is induced.",
          "Change the loop area inside the field → flux changes → EMF is induced."
        ],
        formulaSet: [
          {label:"No flux change",math:String.raw`\boxed{\Delta\Phi=0\Rightarrow\varepsilon=0}`},
          {label:"Flux changes",math:String.raw`\boxed{\Delta\Phi\ne0\Rightarrow\text{induced EMF}}`}
        ]
      },
      {
        title: "Steady current and no current",
        paragraphs: [
          "A steady current produces a steady magnetic field. If both coils and everything around them stay still, the magnetic flux remains constant and no EMF is induced.",
          "If there is no current in the source coil, that coil produces no magnetic field. There is then no changing flux from the source coil and no induced EMF.",
          "The most important question is not simply whether current exists. Ask whether the magnetic flux through the second coil is changing."
        ],
        formulaSet: [
          {label:"Steady stationary system",math:String.raw`\boxed{\text{steady current}\rightarrow\text{steady }B\rightarrow\text{constant flux}\rightarrow\text{no induced EMF}}`},
          {label:"Safest rule",math:String.raw`\boxed{\text{no change in magnetic flux}\Rightarrow\text{no induced EMF}}`},
          {label:"Induction condition",math:String.raw`\boxed{\text{change in magnetic flux}\Rightarrow\text{induced EMF}}`}
        ]
      },
      {
        title: "Faraday's law of induction",
        paragraphs: [
          "Faraday's law calculates the induced EMF from the rate of change of magnetic flux.",
          "A larger flux change produces more EMF. Making the same flux change in less time also produces more EMF. A coil with more turns produces more total EMF because the effect occurs in every turn.",
          "The negative sign represents Lenz's law. It shows that the induced EMF acts in a direction that opposes the change in flux."
        ],
        formulaSet: [
          {label:"One loop",math:String.raw`\varepsilon=-\frac{\Delta\Phi}{\Delta t}`},
          {label:"Coil with N turns",math:String.raw`\boxed{\varepsilon=-N\frac{\Delta\Phi}{\Delta t}}`},
          {label:"Time proportionality",math:String.raw`\boxed{|\varepsilon|\propto\frac{1}{\Delta t}}`}
        ],
        points: [
          "Larger |ΔΦ| → larger EMF.",
          "EMF is inversely proportional to the time taken for the flux change.",
          "Shorter change time, Δt → larger EMF. Longer change time → smaller EMF.",
          "More turns, N → larger EMF.",
          "Constant flux → ΔΦ = 0 → no induced EMF."
        ]
      },
      {
        title: "Back EMF in a motor",
        paragraphs: [
          "Back EMF, also called counter EMF, is the voltage induced in a spinning motor. It acts in the opposite direction to the source voltage that drives the motor.",
          "The source voltage sends current through the armature and makes it rotate. Once the armature is moving through the magnetic field, it also behaves like a generator and produces its own induced voltage.",
          "By Lenz's law, this induced voltage opposes the change that produced it. It therefore pushes against the source voltage and reduces the voltage that drives current through the motor.",
          "When the motor first starts, it is not yet spinning, so there is almost no back EMF. The motor can draw a large starting current. As it speeds up, back EMF increases and the current becomes smaller."
        ],
        formulaSet: [
          {label:"Meaning",math:String.raw`\boxed{\text{back EMF}=\text{induced voltage that opposes the source voltage}}`},
          {label:"First",math:String.raw`\text{source voltage}\rightarrow\text{motor spins}`},
          {label:"Then",math:String.raw`\text{spinning motor}\rightarrow\text{back EMF}`}
        ],
        points: [
          "Motor stopped or just starting → little back EMF → larger current.",
          "Motor spinning faster → larger back EMF → smaller current.",
          "Back EMF does not stop the motor; it reduces the effective voltage across it."
        ]
      },
      {
        title: "Calculating back EMF",
        derivation: true,
        paragraphs: [
          "The back EMF is the part of the source voltage left after the voltage used to push current through the motor's resistance is taken away.",
          "The source voltage is split into two parts. One part is opposed by the back EMF, and the other part pushes current through the resistance of the armature wire.",
          "We subtract because the back EMF acts in the opposite direction to the source voltage."
        ],
        formulaSet: [
          {label:"Voltage relationship",math:String.raw`V=E_b+IR`},
          {label:"Rearrange for back EMF",math:String.raw`\boxed{E_b=V-IR}`},
          {label:"Example values",math:String.raw`V=6.0\ \mathrm V,\qquad IR=3.6\ \mathrm V`},
          {label:"Substitute",math:String.raw`E_b=6.0-3.6`},
          {label:"Answer",math:String.raw`\boxed{E_b=2.4\ \mathrm V}`}
        ],
        variables: [
          {symbol:String.raw`V`,name:"Source voltage",meaning:"The voltage supplied by the battery or power source."},
          {symbol:String.raw`IR`,name:"Resistance voltage",meaning:"The voltage used to push current through the armature resistance."},
          {symbol:String.raw`E_b`,name:"Back EMF",meaning:"The counter voltage produced by the spinning motor."}
        ],
        points: [
          "Source voltage − voltage across resistance = back EMF."
        ]
      },
      {
        title: "The whole idea",
        paragraphs: [
          "A magnetic field by itself does not guarantee induction. The magnetic flux through the circuit must change.",
          "Always identify what changes B, A, or θ. Then decide how quickly the flux changes and use Faraday's law."
        ],
        formulaSet: [
          {label:"Magnetic flux",math:String.raw`\Phi=BA\cos\theta`},
          {label:"Faraday's law",math:String.raw`\varepsilon=-N\frac{\Delta\Phi}{\Delta t}`},
          {label:"Main chain",math:String.raw`\boxed{\text{flux changes}\rightarrow\text{EMF is induced}\rightarrow\text{current may flow in a closed circuit}}`}
        ]
      }
    ]
  },
  "parallel-and-perpendicular-induction": {
    number: "03",
    unit: "08",
    title: "Parallel and perpendicular relationships",
    introduction: "Compare the coil axis and wire motion with the magnetic field to identify magnetic flux and induced EMF quickly.",
    sections: [
      {
        title: "Coil axis and wire direction chart",
        paragraphs: [
          "The coil axis is an imaginary line perpendicular to the face of the coil. Use the axis when discussing magnetic flux.",
          "Use the wire's velocity when discussing motional EMF. For the rotating-coil rows, the EMF values describe that instant during rotation."
        ],
        orientationChart: [
          {case:"Coil axis ∥ B",flux:"Maximum",emf:"Zero at that instant"},
          {case:"Coil axis ⟂ B",flux:"Zero",emf:"Maximum while rotating"},
          {case:"Wire velocity ∥ B",flux:"—",emf:"Zero"},
          {case:"Wire velocity ⟂ B",flux:"—",emf:"Maximum"}
        ],
        formulaSet: [
          {label:"Maximum flux",math:String.raw`\boxed{\Phi_{\max}\Rightarrow\varepsilon=0}`},
          {label:"Maximum EMF",math:String.raw`\boxed{|\varepsilon|_{\max}\Rightarrow\Phi=0}`}
        ]
      }
    ]
  },
  "emf-generators-and-motors": {
    number: "04",
    unit: "08",
    title: "EMF with generators and electric motors",
    introduction: "Learn how an armature and magnetic field allow generators and motors to change energy from one form to another.",
    sections: [
      {
        title: "What is an armature?",
        paragraphs: [
          "The primary function of an armature in an electric motor or generator is to handle energy conversion through electromagnetic interaction with a magnetic field.",
          "The armature is the loop or coil of wire that rotates inside a magnetic field.",
          "In an electric motor, the armature helps change electrical energy into mechanical energy. In a generator, it does the reverse and helps change mechanical energy into electrical energy.",
          "The armature is an important moving part in simple generators and electric motors. What makes it move, and what happens because of that motion, depends on the device."
        ]
      },
      {
        title: "What is a coil, and how is it different from an armature?",
        paragraphs: [
          "A coil is a wire wrapped into one or more loops. Using many loops makes the magnetic effect stronger because the effect from each turn adds together.",
          "When current flows through a coil, it creates a magnetic field. When the magnetic flux through a coil changes, an EMF can be induced in the coil.",
          "A coil may stay still or rotate. It can be used in a solenoid, electromagnet, transformer, motor, or generator.",
          "An armature is the working part of a motor or generator where electromagnetic energy conversion takes place. In the simple machines studied in this course, the armature is usually the rotating coil or loop.",
          "The simplest difference is that coil describes the wire's looped shape, while armature describes the job that a part performs. An armature can contain a coil, but not every coil is an armature."
        ],
        partChart: [
          {part:"Coil",meaning:"Wire wound into one or more loops",job:"Creates a magnetic field or receives induced EMF"},
          {part:"Armature",meaning:"The active working part of a motor or generator",job:"Takes part in electrical and mechanical energy conversion"}
        ],
        points: [
          "Coil = the form of the wire.",
          "Armature = the energy-conversion role of the machine part.",
          "In a simple motor or generator, the rotating coil acts as the armature."
        ]
      },
      {
        title: "The difference between voltage and induced EMF",
        paragraphs: [
          "They can both act like the electrical “push,” but the difference is where that push comes from.",
          "Voltage is the general name for an electrical difference between two points. A battery can create voltage, a power supply can create voltage, and a generator can create voltage.",
          "Induced EMF is specifically a voltage that is created because a wire or loop is moving through a magnetic field, or because the magnetic field through it is changing.",
          "So you can think of it like this:"
        ],
        formulaSet: [
          {label:"Voltage",math:String.raw`\boxed{\text{Voltage}=\text{general electrical push}}`},
          {label:"Induced EMF",math:String.raw`\boxed{\text{Induced EMF}=\text{electrical push made by magnetism}}`}
        ]
      },
      {
        title: "How a generator works",
        paragraphs: [
          "In a generator, an outside energy source spins the armature. A turbine, engine, wind, or moving water can provide this motion.",
          "As the wire moves through the magnetic field, magnetic force pushes charges in the wire. This produces an induced EMF. If the circuit is complete, the induced voltage makes current flow.",
          "The magnetic field does not supply the energy by itself. The energy comes from whatever turns the armature. The magnetic field allows the armature's motion to push charges."
        ],
        formulaSet: [
          {label:"Generator energy change",math:String.raw`\boxed{\text{mechanical energy}\rightarrow\text{electrical energy}}`}
        ]
      },
      {
        title: "How an electric motor works",
        paragraphs: [
          "An electric motor works in the opposite direction. Electric current is sent through the armature while it is inside a magnetic field.",
          "The field pushes on the current-carrying wires. One side of the loop is pushed one way, and the other side is pushed the opposite way. These forces create a turning effect, so the armature rotates."
        ],
        formulaSet: [
          {label:"Motor energy change",math:String.raw`\boxed{\text{electrical energy}\rightarrow\text{mechanical energy}}`}
        ]
      },
      {
        title: "Generator and motor comparison",
        paragraphs: [
          "The magnetic field acts as the connection between motion and electric current. The direction of the energy change tells you whether the device is a generator or a motor."
        ],
        deviceChart: [
          {device:"Generator",armature:"You spin the armature → electricity is produced",energy:"Mechanical → Electrical"},
          {device:"Electric motor",armature:"You supply current → the armature spins",energy:"Electrical → Mechanical"}
        ],
        points: [
          "Generator: motion through a magnetic field pushes charges.",
          "Motor: current inside a magnetic field experiences a force and moves the wire.",
          "The magnetic field is the middle connection in both devices."
        ]
      }
    ]
  },
  "the-transformer": {
    number: "05",
    unit: "08",
    title: "The transformer",
    introduction: "Learn how a transformer uses alternating current and electromagnetic induction to change voltage.",
    sections: [
      {
        title: "What is a transformer?",
        paragraphs: [
          "A transformer is an electrical device that changes the voltage of alternating current, AC, to a higher or lower level without changing its frequency.",
          "A transformer transfers electrical energy between two coils by using a changing magnetic field. The coils do not need to touch each other electrically.",
          "A transformer that increases voltage is called a step-up transformer. A transformer that decreases voltage is called a step-down transformer."
        ],
        formulaSet: [
          {label:"Main function",math:String.raw`\boxed{\text{AC input voltage}\rightarrow\text{higher or lower AC output voltage}}`},
          {label:"Frequency",math:String.raw`\boxed{f_{\text{output}}=f_{\text{input}}}`}
        ]
      },
      {
        title: "What is alternating current?",
        paragraphs: [
          "Alternating current, AC, is an electric current that repeatedly reverses direction and changes size over time.",
          "Direct current, DC, flows in only one direction. A battery is a common source of DC.",
          "AC power moves back and forth and is the standard electricity supplied to homes and businesses through wall sockets.",
          "A transformer needs a changing current because a changing current creates the changing magnetic field required for induction. A steady DC current does not continuously operate an ordinary transformer."
        ],
        points: [
          "AC → direction and size change with time.",
          "DC → current normally flows in one direction.",
          "Changing AC → changing magnetic field → changing magnetic flux → induced output EMF."
        ]
      },
      {
        title: "Why a transformer does not work with DC",
        paragraphs: [
          "A transformer relies on Faraday's law. Transformers do not work with direct current (DC) because DC provides a steady, unchanging flow of electricity.",
          "A steady DC signal creates a fixed magnetic field and constant magnetic flux. Because the magnetic flux does not change, the induced EMF and voltage in the secondary coil are zero.",
          "Therefore, the secondary coil does not deliver electrical energy to the connected device."
        ]
      },
      {
        title: "The primary and secondary coils",
        paragraphs: [
          "The primary coil and secondary coil are the two main electrical parts of a transformer.",
          "The primary coil is the input coil. It connects to the AC power source and uses the alternating current to create a changing magnetic field in the transformer's core.",
          "The secondary coil is the output coil. It is not electrically connected to the primary coil. The changing magnetic flux from the primary passes through it and induces a new voltage.",
          "The secondary coil sends the output electrical energy to a load, such as an appliance, electronic device, or power grid."
        ],
        formulaSet: [
          {label:"Energy-transfer chain",math:String.raw`\boxed{\text{primary AC}\rightarrow\text{changing magnetic field}\rightarrow\text{secondary EMF}}`}
        ]
      },
      {
        title: "How the two coils work together",
        paragraphs: [
          "the primary coil receives the electricity; the core mainly helps carry the changing magnetic field from the primary side to the secondary side.",
          "The process is: the source sends AC current through the primary coil. That current creates a changing magnetic field in the core. The changing magnetic field reaches the secondary coil. Because the magnetic field through the secondary is changing, it creates an induced voltage there. If the secondary is connected to a complete circuit, that voltage pushes charges and current flows.",
          "The primary coil changes electricity into magnetism because electric current creates a magnetic field. Since AC keeps changing, the magnetic field made by the primary also keeps changing.",
          "The secondary coil does the opposite because the changing magnetic flux through it induces a voltage according to Faraday's law. In a closed secondary circuit, this induced voltage produces current.",
          "The primary and secondary coils are not connected directly by a wire. They are magnetically linked by the changing magnetic field carried through the core."
        ],
        points: [
          "Primary coil: electricity → changing magnetism.",
          "Core: guides the changing magnetic field.",
          "Secondary coil: changing magnetism → induced electricity.",
          "No direct wire connection: energy crosses through the changing magnetic field."
        ]
      },
      {
        title: "Key Differences",
        paragraphs: [],
        transformerChart: [
          {feature:"Role",primary:"Input side (receives power)",secondary:"Output side (delivers power)"},
          {feature:"Connection",primary:"Plugs into the power source",secondary:"Connects to the device or load"},
          {feature:"Function",primary:"Turns electricity into magnetism",secondary:"Turns magnetism back into electricity"}
        ]
      },
      {
        title: "Conclusion",
        paragraphs: [
          "A transformer has two separate coils called the primary coil and the secondary coil. The primary coil is connected to an AC power source, so the current in that coil keeps changing direction. Because the current keeps changing, the magnetic field around the primary coil also keeps changing.",
          "That changing magnetic field travels through the transformer core and reaches the secondary coil. When the magnetic field through the secondary coil keeps changing, it creates an induced voltage in the secondary coil. That induced voltage then pushes charges through the secondary circuit, so current can flow to the device connected to it.",
          "The electricity from the primary coil does not directly flow into the secondary coil. The energy is transferred from the primary coil to the secondary coil through the changing magnetic field.",
          "A transformer does not work properly with steady DC because steady DC creates a steady magnetic field. A steady magnetic field means the magnetic flux is not changing, so the secondary coil does not get a continuous induced voltage. Without that induced voltage, there is no continuous current supplied to the device.",
          "So the whole idea is that AC creates a changing magnetic field, the changing magnetic field creates an induced voltage in the secondary coil, and that induced voltage makes current flow in the secondary circuit."
        ]
      },
      {
        title: "Ideal transformer formulas",
        paragraphs: [
          "For an ideal transformer, the voltage ratio equals the turns ratio. The current ratio is reversed."
        ],
        formulaSet: [
          {label:"Voltage and turns",math:String.raw`\boxed{\frac{E_s}{E_p}=\frac{N_s}{N_p}}`},
          {label:"Voltage and current",math:String.raw`\boxed{\frac{E_s}{E_p}=\frac{I_p}{I_s}}`},
          {label:"Combined relationship",math:String.raw`\boxed{\frac{E_s}{E_p}=\frac{N_s}{N_p}=\frac{I_p}{I_s}}`}
        ]
      },
      {
        title: "Example: twice as many secondary turns",
        derivation: true,
        paragraphs: [
          "Suppose the secondary coil has twice as many turns as the primary coil."
        ],
        formulaSet: [
          {label:"Turns ratio",math:String.raw`\frac{N_s}{N_p}=2`},
          {label:"Use the transformer ratio",math:String.raw`\frac{E_s}{E_p}=\frac{N_s}{N_p}`},
          {label:"Voltage ratio",math:String.raw`\frac{E_s}{E_p}=2`},
          {label:"Meaning",math:String.raw`\boxed{E_s=2E_p}`}
        ]
      },
      {
        title: "Why the current ratio is reversed",
        derivation: true,
        paragraphs: [
          "In an ideal transformer, input power equals output power."
        ],
        formulaSet: [
          {label:"Ideal power",math:String.raw`P_{\mathrm{in}}=P_{\mathrm{out}}`},
          {label:"Using E for voltage",math:String.raw`E_pI_p=E_sI_s`},
          {label:"Using V for voltage",math:String.raw`V_pI_p=V_sI_s`},
          {label:"Current ratio",math:String.raw`\boxed{\frac{E_s}{E_p}=\frac{I_p}{I_s}}`}
        ]
      },
      {
        title: "Transformer power, heat, and efficiency formulas",
        paragraphs: [],
        formulaSet: [
          {label:"Input power using E",math:String.raw`P_{\mathrm{in}}=E_pI_p`},
          {label:"Input power using V",math:String.raw`P_{\mathrm{in}}=V_pI_p`},
          {label:"Output power using E",math:String.raw`P_{\mathrm{out}}=E_sI_s`},
          {label:"Output power using V",math:String.raw`P_{\mathrm{out}}=V_sI_s`},
          {label:"Power lost as heat",math:String.raw`P_{\mathrm{heat}}=P_{\mathrm{in}}-P_{\mathrm{out}}`},
          {label:"Efficiency using power",math:String.raw`\boxed{\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}}\times100\%}`},
          {label:"Motor efficiency using back EMF",math:String.raw`\boxed{\eta=\frac{E_{\mathrm{back}}}{V}\times100\%}`}
        ]
      }
    ]
  }
};

function ParallelPlateDiagram() {
  return (
    <figure className="parallel-plate-diagram">
      <svg viewBox="0 0 760 350" role="img" aria-labelledby="plate-diagram-title plate-diagram-description">
        <title id="plate-diagram-title">Charged particles between parallel plates</title>
        <desc id="plate-diagram-description">A positive plate is on the left and a negative plate is on the right. Electric-field arrows and a proton point right. An electron points left.</desc>
        <defs>
          <marker id="plate-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8fc9ff" />
          </marker>
          <marker id="plate-arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f3d35a" />
          </marker>
        </defs>

        <rect x="76" y="48" width="38" height="252" rx="4" className="plate positive-plate" />
        <rect x="646" y="48" width="38" height="252" rx="4" className="plate negative-plate" />
        <text x="95" y="32" className="plate-label">POSITIVE PLATE</text>
        <text x="665" y="32" className="plate-label">NEGATIVE PLATE</text>
        <text x="95" y="185" className="plate-sign">+</text>
        <text x="665" y="181" className="plate-sign">−</text>

        {[95, 175, 255].map(y => (
          <path key={y} d={`M 135 ${y} L 625 ${y}`} className="field-direction" markerEnd="url(#plate-arrow-blue)" />
        ))}
        <text x="380" y="82" className="field-label">ELECTRIC FIELD</text>

        <circle cx="288" cy="175" r="24" className="particle proton" />
        <text x="288" y="183" className="particle-sign">+</text>
        <path d="M 320 175 L 430 175" className="particle-motion proton-motion" markerEnd="url(#plate-arrow-yellow)" />
        <text x="375" y="160" className="particle-label">PROTON</text>

        <circle cx="505" cy="255" r="24" className="particle electron" />
        <text x="505" y="262" className="particle-sign">−</text>
        <path d="M 473 255 L 363 255" className="particle-motion electron-motion" markerEnd="url(#plate-arrow-yellow)" />
        <text x="418" y="240" className="particle-label">ELECTRON</text>
      </svg>
      <figcaption>Electric field: positive → negative. Electron motion: negative → positive. Proton motion: positive → negative.</figcaption>
    </figure>
  );
}

function ElectricFieldDiagram() {
  return (
    <figure className="electric-field-lesson-diagram">
      <svg viewBox="0 0 820 350" role="img" aria-labelledby="field-picture-title field-picture-description">
        <title id="field-picture-title">Electric fields around positive and negative charges</title>
        <desc id="field-picture-description">Field arrows point away from a positive charge and toward a negative charge.</desc>
        <defs>
          <marker id="field-picture-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        {[0,45,90,135,180,225,270,315].map((angle) => {
          const radians = angle * Math.PI / 180;
          return (
            <line
              key={`positive-${angle}`}
              x1={220 + Math.cos(radians) * 54}
              y1={175 + Math.sin(radians) * 54}
              x2={220 + Math.cos(radians) * 125}
              y2={175 + Math.sin(radians) * 125}
              markerEnd="url(#field-picture-arrow)"
            />
          );
        })}
        {[0,45,90,135,180,225,270,315].map((angle) => {
          const radians = angle * Math.PI / 180;
          return (
            <line
              key={`negative-${angle}`}
              x1={600 + Math.cos(radians) * 125}
              y1={175 + Math.sin(radians) * 125}
              x2={600 + Math.cos(radians) * 54}
              y2={175 + Math.sin(radians) * 54}
              markerEnd="url(#field-picture-arrow)"
            />
          );
        })}
        <circle className="diagram-positive-charge" cx="220" cy="175" r="45" />
        <circle className="diagram-negative-charge" cx="600" cy="175" r="45" />
        <text className="diagram-charge-sign" x="220" y="189">+</text>
        <text className="diagram-charge-sign" x="600" y="188">−</text>
        <text className="diagram-direction-label" x="220" y="330">AWAY FROM POSITIVE</text>
        <text className="diagram-direction-label" x="600" y="330">TOWARD NEGATIVE</text>
      </svg>
      <figcaption>Electric field direction is defined by the force on a positive test charge.</figcaption>
    </figure>
  );
}

function PotentialEnergyHillDiagram() {
  return (
    <figure className="energy-hill-diagram">
      <svg viewBox="0 0 900 390" role="img" aria-labelledby="energy-hill-title energy-hill-description">
        <title id="energy-hill-title">Electric potential shown as energy hills</title>
        <desc id="energy-hill-description">A positive charge moves downhill toward lower electric potential. A negative charge moves toward higher electric potential. Both move toward lower electric potential energy.</desc>
        <defs>
          <marker id="hill-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>

        <g className="hill-panel">
          <text x="225" y="35" className="hill-title">POSITIVE CHARGE</text>
          <path d="M 45 280 C 130 255 160 90 260 90 C 350 90 375 235 420 280" className="hill-curve" />
          <circle cx="260" cy="74" r="24" className="hill-positive" />
          <text x="260" y="83" className="hill-sign">+</text>
          <path d="M 285 92 C 325 120 348 180 370 236" className="hill-motion" markerEnd="url(#hill-arrow)" />
          <text x="105" y="315" className="hill-low-label">LOWER V</text>
          <text x="260" y="125" className="hill-high-label">HIGHER V</text>
          <text x="338" y="265" className="hill-note">MOVES DOWNHILL</text>
        </g>

        <line x1="450" y1="50" x2="450" y2="335" className="hill-divider" />

        <g className="hill-panel">
          <text x="675" y="35" className="hill-title">NEGATIVE CHARGE</text>
          <path d="M 480 280 C 555 255 590 90 690 90 C 785 90 815 235 855 280" className="hill-curve" />
          <circle cx="535" cy="245" r="24" className="hill-negative" />
          <text x="535" y="253" className="hill-sign">−</text>
          <path d="M 560 229 C 590 190 618 135 660 105" className="hill-motion" markerEnd="url(#hill-arrow)" />
          <text x="535" y="315" className="hill-low-label">LOWER V</text>
          <text x="690" y="125" className="hill-high-label">HIGHER V</text>
          <text x="646" y="265" className="hill-note">MOVES TOWARD HIGHER V</text>
        </g>

        <text x="450" y="370" className="hill-caption">BOTH CHARGES MOVE TOWARD LOWER ELECTRIC POTENTIAL ENERGY, Eₚ</text>
      </svg>
      <figcaption>Potential is the hill, voltage is the change in height, field is the slope, and force is the push or pull on the charge.</figcaption>
    </figure>
  );
}

function Formula({ children, inline = false }) {
  return (
    <span
      className={inline ? "lesson-inline-formula" : "lesson-equation"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          displayMode: !inline,
          throwOnError: false
        })
      }}
    />
  );
}

function VectorTriangleDiagram(){
  return <figure className="vector-triangle-diagram">
    <svg viewBox="0 0 620 330" role="img" aria-label="A three newton horizontal vector and four newton vertical vector forming a five newton resultant">
      <defs><marker id="vector-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z"/></marker></defs>
      <line x1="105" y1="260" x2="410" y2="260" className="vector-x" markerEnd="url(#vector-arrow)"/>
      <line x1="410" y1="260" x2="410" y2="65" className="vector-y" markerEnd="url(#vector-arrow)"/>
      <line x1="105" y1="260" x2="410" y2="65" className="vector-resultant" markerEnd="url(#vector-arrow)"/>
      <path d="M380 260 L380 230 L410 230" className="vector-right-angle"/>
      <text x="255" y="295">3 N right</text><text x="455" y="165">4 N up</text><text x="230" y="145">Resultant = 5 N</text>
    </svg>
    <figcaption>The horizontal and vertical vectors form a right triangle. The diagonal represents the resultant.</figcaption>
  </figure>;
}

function ComponentTriangleDiagram(){
  return <figure className="vector-triangle-diagram component-triangle-diagram">
    <svg viewBox="0 0 620 330" role="img" aria-label="A ten newton vector at thirty degrees divided into horizontal and vertical components">
      <defs><marker id="component-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z"/></marker></defs>
      <line x1="105" y1="260" x2="455" y2="260" className="vector-x" markerEnd="url(#component-arrow)"/>
      <line x1="455" y1="260" x2="455" y2="60" className="vector-y" markerEnd="url(#component-arrow)"/>
      <line x1="105" y1="260" x2="455" y2="60" className="vector-resultant" markerEnd="url(#component-arrow)"/>
      <path d="M165 260 A60 60 0 0 0 157 230" className="component-angle"/>
      <text x="270" y="295">Fₓ = 8.66 N</text><text x="505" y="165">Fᵧ = 5.00 N</text><text x="255" y="135">F = 10 N</text><text x="170" y="235">30°</text>
    </svg>
    <figcaption>Because the angle is measured from the horizontal, Fₓ is adjacent and uses cosine. Fᵧ is opposite and uses sine.</figcaption>
  </figure>;
}

export function generateStaticParams() {
  return Object.keys(lessons).map(slug => ({ slug }));
}

export default async function LessonDetail({ params }) {
  const { slug } = await params;
  const lesson = lessons[slug];

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero">
        <div>
          <Link href="/lessons">← All lessons</Link>
          <span>{lesson.unit ? `Unit ${lesson.unit} · ` : ""}Section {lesson.number}</span>
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.introduction}</p>
      </header>
      <article className="lesson-body">
        {lesson.placeholder ? (
          <section className="lesson-content-block lesson-placeholder-block">
            <div className="content-number">—</div>
            <div>
              <h2>Learning materials coming soon</h2>
              <p>This section has been created as a placeholder. Lesson content has not been added yet.</p>
            </div>
          </section>
        ) : lesson.sections ? lesson.sections.map((section, index) => (
          <section className="lesson-content-block" key={section.title}>
            <div className="content-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.ruleGroups && <div className="right-hand-rule-groups">{section.ruleGroups.map((rule,index)=><article key={rule.title}><span>RULE {String(index+1).padStart(2,"0")}</span><h3>{rule.title}</h3><strong>{rule.mapping}</strong><p>{rule.text}</p><Link className="rule-simulator-link" href={rule.href}>{rule.linkText} →</Link></article>)}</div>}
              {section.orientationChart && <div className="orientation-chart-wrap"><table className="orientation-chart"><thead><tr><th>Direction</th><th>Magnetic flux</th><th>Induced EMF</th></tr></thead><tbody>{section.orientationChart.map(row=><tr key={row.case}><th>{row.case}</th><td>{row.flux}</td><td>{row.emf}</td></tr>)}</tbody></table></div>}
              {section.deviceChart && <div className="orientation-chart-wrap"><table className="orientation-chart device-chart"><thead><tr><th>Device</th><th>What happens to the armature?</th><th>Energy change</th></tr></thead><tbody>{section.deviceChart.map(row=><tr key={row.device}><th>{row.device}</th><td>{row.armature}</td><td>{row.energy}</td></tr>)}</tbody></table></div>}
              {section.termChart && <div className="orientation-chart-wrap"><table className="orientation-chart term-chart"><thead><tr><th>Term</th><th>Where it comes from</th><th>Example</th></tr></thead><tbody>{section.termChart.map(row=><tr key={row.term}><th>{row.term}</th><td>{row.source}</td><td>{row.example}</td></tr>)}</tbody></table></div>}
              {section.partChart && <div className="orientation-chart-wrap"><table className="orientation-chart part-chart"><thead><tr><th>Part</th><th>What it is</th><th>What it does</th></tr></thead><tbody>{section.partChart.map(row=><tr key={row.part}><th>{row.part}</th><td>{row.meaning}</td><td>{row.job}</td></tr>)}</tbody></table></div>}
              {section.transformerChart && <div className="orientation-chart-wrap"><table className="orientation-chart transformer-chart"><thead><tr><th>Feature</th><th>Primary coil</th><th>Secondary coil</th></tr></thead><tbody>{section.transformerChart.map(row=><tr key={row.feature}><th>{row.feature}</th><td>{row.primary}</td><td>{row.secondary}</td></tr>)}</tbody></table></div>}
              {section.points && <div className="lesson-point-list">{section.pointLead && <strong>{section.pointLead}</strong>}<ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul></div>}
              {section.formula && <Formula>{section.formula}</Formula>}
              {section.formulaSet && (section.derivation ? <div className="lesson-derivation">{section.formulaSet.map((item,index)=><div className="derivation-step" key={item.label}><div><span>{item.label}</span><Formula>{item.math}</Formula></div>{index<section.formulaSet.length-1&&<span className="derivation-arrow" aria-hidden="true">↓</span>}</div>)}</div> : <div className="field-formula-grid">{section.formulaSet.map(item=><div key={item.label}><span>{item.label}</span><Formula>{item.math}</Formula></div>)}</div>)}
              {section.variables && (
                <div className="variable-grid">
                  {section.variables.map(variable => (
                    <div className="variable-card" key={variable.name}>
                      <Formula inline>{variable.symbol}</Formula>
                      <div>
                        <h3>{variable.name}</h3>
                        <p>{variable.meaning}</p>
                        {variable.example && <Formula>{variable.example}</Formula>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.diagram && <ParallelPlateDiagram />}
              {section.fieldDiagram && <ElectricFieldDiagram />}
              {section.energyHillDiagram && <PotentialEnergyHillDiagram />}
              {section.vectorTriangle && <VectorTriangleDiagram />}
              {section.componentTriangle && <ComponentTriangleDiagram />}
              {section.fieldSimulator && <ElectricFieldStrengthSimulator />}
            </div>
          </section>
        )) : (
          <section className="lesson-content-block">
            <div className="content-number">01</div>
            <div>
              <h2>Introduction</h2>
              <p>{lesson.introduction}</p>
            </div>
          </section>
        )}
        {slug === "electric-force" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric force resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-force/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
        {slug === "introduction-to-magnets" && <section className="lesson-resource-link"><span>Interactive review</span><h2>Magnetic field simulators</h2><p>Use the bar magnet, solenoid, straight-wire, and current-loop simulators to see these field directions.</p><Link href="/simulators/unit-7">Open Unit 7 simulators <ArrowIcon /></Link></section>}
        {slug === "magnetic-field-strength" && <section className="lesson-resource-link"><span>Practice and review</span><h2>Magnetic field resources</h2><p>Open the resource page for magnetic force and field-strength worksheets.</p><Link href="/lessons/magnetic-field-strength/resources">Open resources <ArrowIcon /></Link></section>}
        {slug === "magnetic-field-and-the-electron" && <section className="lesson-resource-link"><span>Practice and review</span><h2>Magnetic field and electron resources</h2><p>Open the resource page for electron motion, CRT, and mass-spectrometer worksheets.</p><Link href="/lessons/magnetic-field-and-the-electron/resources">Open resources <ArrowIcon /></Link></section>}
        {slug === "induced-electromotive-force" && <section className="lesson-resource-link"><span>Practice and review</span><h2>Induced EMF resources</h2><p>Open the resource page for electromagnetic induction worksheets.</p><Link href="/lessons/induced-electromotive-force/resources">Open resources <ArrowIcon /></Link></section>}
        {slug === "magnetic-flux-and-faradays-law" && <section className="lesson-resource-link"><span>Practice and review</span><h2>Magnetic flux and EMF resources</h2><p>Open the resource page for magnetic flux and Faraday&apos;s-law worksheets.</p><Link href="/lessons/magnetic-flux-and-faradays-law/resources">Open resources <ArrowIcon /></Link></section>}
        {slug === "electric-field-strength" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric field resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-field-strength/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
        {slug === "electric-potentials" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric potential resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-potentials/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
      </article>
      <SiteFooter />
    </main>
  );
}
