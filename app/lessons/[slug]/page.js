import Link from "next/link";
import katex from "katex";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../site-chrome";
import ElectricFieldStrengthSimulator from "../electric-field-strength-simulator";

const lessons = {
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
