// console.log('xoces is loaded:', xoces);

// ========
// data that we want to visualize
// =========
var outcomes = [
  {id: '1', type: 'outcome', name: 'Writing short (20 to 50 lines) programs incorporating simple control and data structures'},
  {id: '2', type: 'outcome', name: 'Using repetitive control structures and selection'},
  {id: '3', type: 'outcome', name: 'Testing and debugging simple programs'},
  {id: '4', type: 'outcome', name: 'Decomposing simple problems into suitable functions'},
  {id: '5', type: 'outcome', name: 'Writing moderate-sized (100 to 300 lines) programs incorporating a variety of control and data structures'},
  {id: '6', type: 'outcome', name: 'Implementing common data structures and using recursive solutions'},
  {id: '7', type: 'outcome', name: 'Identifying and creating black box and white box tests and using assertions for testing and debugging'},
  {id: '8', type: 'outcome', name: 'Implementing classes given design guidance'},
  {id: '9', type: 'outcome', name: 'Using a provided style guide to produce clean, readable code'},
  {id: '10', type: 'outcome', name: 'Determining the time complexity of simple algorithms and stating the complexity in terms of big-O notation'},
  {id: '11', type: 'outcome', name: 'Writing 1000-line programs in Java'},
  {id: '12', type: 'outcome', name: 'Decomposing a problem'},
  {id: '13', type: 'outcome', name: 'Composing a program from multiple modules'},
  {id: '14', type: 'outcome', name: 'Applying design patterns to software development'},
  {id: '15', type: 'outcome', name: 'Testing and debugging programs'},
  {id: '16', type: 'outcome', name: 'Documenting and commenting a program properly'},
  {id: '17', type: 'outcome', name: 'Using source code control'},
  {id: '18', type: 'outcome', name: 'Reconstructing concept definitions and explain how more advanced concepts are defined in terms of more basic concepts'},
  {id: '19', type: 'outcome', name: 'Given a set of hypotheses, determine whether or not a given conclusion logically follows from them.'},
  {id: '20', type: 'outcome', name: 'Given a non-trivial provable conjecture, construct a complete and logically sound proof that convincingly argues the truth of the conjecture.'},
  {id: '21', type: 'outcome', name: 'Demonstrate ability to convert between logic and set expressions'},
  {id: '22', type: 'outcome', name: 'Solving specific types of recurrence relations and prove that the solutions define the same sequences as the original relations'},
  {id: '23', type: 'outcome', name: 'Given a counting problem, produce the correct quantity of potential outcomes by identifying and applying the appropriate counting concepts'},
  {id: '24', type: 'outcome', name: 'Understanding basic machine organization'},
  {id: '25', type: 'outcome', name: 'Understanding elementary hardware concepts'},
  {id: '26', type: 'outcome', name: 'Understanding CPU internals'},
  {id: '27', type: 'outcome', name: 'Understanding machine operations and instructions'},
  {id: '28', type: 'outcome', name: 'Assembling language concepts and programming'},
  {id: '29', type: 'outcome', name: 'Understanding and using the fundamentals of object-oriented programming'},
  {id: '30', type: 'outcome', name: 'Understanding the relationships among objects and classes'},
  {id: '31', type: 'outcome', name: 'Understanding the importance of the Java interface construct in building software systems'},
  {id: '32', type: 'outcome', name: 'Building complex systems (15+ classes)'},
  {id: '33', type: 'outcome', name: 'Learning to work with a central code repository'},
  {id: '34', type: 'outcome', name: 'Using good practices of programming to develop good object-oriented software'},
  {id: '35', type: 'outcome', name: 'Become comfortable with event-driven programming and graphical user interfaces'},
  {id: '36', type: 'outcome', name: 'Using tools of software engineering'},
  {id: '37', type: 'outcome', name: 'Employing Agile software development techniques to effectively build systems'},
  {id: '38', type: 'outcome', name: 'Valuing testing'},
  {id: '39', type: 'outcome', name: 'Writing clean readable code'},
  {id: '40', type: 'outcome', name: 'Making intelligent design decisions'},
  {id: '41', type: 'outcome', name: 'Asymptotically analyzing iterative and recursive algorithms'},
  {id: '42', type: 'outcome', name: 'Constructing and comparing hierarchical structures and graphs'},
  {id: '43', type: 'outcome', name: 'Identifying, analyzing, and comparing common searching and sorting algorithms'},
  {id: '44', type: 'outcome', name: 'Being able to interact with a Unix environment via a Bash shell'},
  {id: '45', type: 'outcome', name: 'Understanding of, and facility with, Unix program development tools'},
  {id: '46', type: 'outcome', name: 'Being able to understand, write and debug simple Bash shell scripts'},
  {id: '47', type: 'outcome', name: 'Being able to understand, write and debug complex C programs'},
];

var modules = [
  {id: 'm1', type: 'module', name: '110: Intro to Computer Programming I'},
  {id: 'm2', type: 'module', name: '120: Intro to Computer Programming II'},
  {id: 'm3', type: 'module', name: '210: Software Development'},
  {id: 'm4', type: 'module', name: '245: Intro to Discrete Structures'},
  {id: 'm5', type: 'module', name: '252: Computer Organization'},
  {id: 'm6', type: 'module', name: '335: Object-Oriented Programming and Design'},
  {id: 'm7', type: 'module', name: '345: Analysis of Discrete Structures'},
  {id: 'm8', type: 'module', name: '352: System Programming and Unix'},

];

var tracks = [
  {id: 't1', type: 'track', name: 'Computer Science'},
];

var institutions = [
  {id: 'Starfleet-Academy', type: 'institution', name: 'Curricular Mapping'},
];

var relationships = [
  {id: 'r1', type: 'has_prerequisite_of', sourceId: '2', targetId: '1'}, 
  {id: 'r2', type: 'has_prerequisite_of', sourceId: '3', targetId: '1'}, 
  {id: 'r3', type: 'has_prerequisite_of', sourceId: '5', targetId: '1'}, 
  {id: 'r4', type: 'has_prerequisite_of', sourceId: '6', targetId: '2'}, 
  {id: 'r5', type: 'has_prerequisite_of', sourceId: '7', targetId: '3'}, 
  {id: 'r6', type: 'has_prerequisite_of', sourceId: '11', targetId: '5'}, 
  {id: 'r7', type: 'has_prerequisite_of', sourceId: '12', targetId: '4'}, 
  {id: 'r8', type: 'has_prerequisite_of', sourceId: '13', targetId: '5'}, 
  {id: 'r9', type: 'has_prerequisite_of', sourceId: '14', targetId: '8'}, 
  {id: 'r10', type: 'has_prerequisite_of', sourceId: '15', targetId: '7'}, 
  {id: 'r11', type: 'has_prerequisite_of', sourceId: '16', targetId: '9'}, 
  {id: 'r12', type: 'has_prerequisite_of', sourceId: '18', targetId: '4'}, 
  {id: 'r13', type: 'has_prerequisite_of', sourceId: '21', targetId: '19'}, 
  {id: 'r14', type: 'has_prerequisite_of', sourceId: '23', targetId: '18'}, 
  {id: 'r15', type: 'has_prerequisite_of', sourceId: '26', targetId: '24'}, 
  {id: 'r16', type: 'has_prerequisite_of', sourceId: '26', targetId: '25'}, 
  {id: 'r17', type: 'has_prerequisite_of', sourceId: '27', targetId: '24'}, 
  {id: 'r18', type: 'has_prerequisite_of', sourceId: '27', targetId: '26'}, 
  {id: 'r19', type: 'has_prerequisite_of', sourceId: '28', targetId: '18'}, 
  {id: 'r20', type: 'has_prerequisite_of', sourceId: '28', targetId: '21'}, 
  {id: 'r21', type: 'has_prerequisite_of', sourceId: '30', targetId: '8'}, 
  {id: 'r22', type: 'has_prerequisite_of', sourceId: '31', targetId: '11'}, 
  {id: 'r23', type: 'has_prerequisite_of', sourceId: '31', targetId: '13'}, 
  {id: 'r24', type: 'has_prerequisite_of', sourceId: '32', targetId: '13'}, 
  {id: 'r25', type: 'has_prerequisite_of', sourceId: '34', targetId: '29'}, 
  {id: 'r26', type: 'has_prerequisite_of', sourceId: '34', targetId: '30'}, 
  {id: 'r27', type: 'has_prerequisite_of', sourceId: '35', targetId: '31'}, 
  {id: 'r28', type: 'has_prerequisite_of', sourceId: '37', targetId: '31'}, 
  {id: 'r29', type: 'has_prerequisite_of', sourceId: '38', targetId: '15'}, 
  {id: 'r30', type: 'has_prerequisite_of', sourceId: '39', targetId: '11'}, 
  {id: 'r31', type: 'has_prerequisite_of', sourceId: '40', targetId: '14'}, 
  {id: 'r32', type: 'has_prerequisite_of', sourceId: '41', targetId: '7'}, 
  {id: 'r33', type: 'has_prerequisite_of', sourceId: '41', targetId: '11'}, 
  {id: 'r34', type: 'has_prerequisite_of', sourceId: '42', targetId: '6'}, 
  {id: 'r35', type: 'has_prerequisite_of', sourceId: '43', targetId: '20'}, 
  {id: 'r36', type: 'has_prerequisite_of', sourceId: '43', targetId: '21'}, 
  {id: 'r37', type: 'has_prerequisite_of', sourceId: '45', targetId: '44'}, 
  {id: 'r38', type: 'has_prerequisite_of', sourceId: '46', targetId: '15'}, 
  {id: 'r39', type: 'has_prerequisite_of', sourceId: '47', targetId: '11'}, 
  {id: 'r40', type: 'has_prerequisite_of', sourceId: '47', targetId: '15'}, 

  {id: 'r41', type: 'has_prerequisite_of', sourceId: 'm2', targetId: 'm1'}, 
  {id: 'r42', type: 'has_prerequisite_of', sourceId: 'm3', targetId: 'm2'}, 
  {id: 'r43', type: 'has_prerequisite_of', sourceId: 'm4', targetId: 'm2'}, 
  {id: 'r44', type: 'has_prerequisite_of', sourceId: 'm5', targetId: 'm3'}, 
  {id: 'r45', type: 'has_prerequisite_of', sourceId: 'm6', targetId: 'm3'}, 
  {id: 'r46', type: 'has_prerequisite_of', sourceId: 'm7', targetId: 'm3'}, 
  {id: 'r47', type: 'has_prerequisite_of', sourceId: 'm7', targetId: 'm4'}, 
  {id: 'r48', type: 'has_prerequisite_of', sourceId: 'm8', targetId: 'm3'}, 



  {id: 'r1001', type: 'belongs_to', sourceId: '1', targetId: 'm1'},
  {id: 'r1002', type: 'belongs_to', sourceId: '2', targetId: 'm1'},
  {id: 'r1003', type: 'belongs_to', sourceId: '3', targetId: 'm1'},
  {id: 'r1004', type: 'belongs_to', sourceId: '4', targetId: 'm1'},
  {id: 'r1005', type: 'belongs_to', sourceId: '5', targetId: 'm2'},
  {id: 'r1006', type: 'belongs_to', sourceId: '6', targetId: 'm2'},
  {id: 'r1007', type: 'belongs_to', sourceId: '7', targetId: 'm2'},
  {id: 'r1008', type: 'belongs_to', sourceId: '8', targetId: 'm2'},
  {id: 'r1009', type: 'belongs_to', sourceId: '9', targetId: 'm2'},
  {id: 'r1010', type: 'belongs_to', sourceId: '10', targetId: 'm2'},
  {id: 'r1011', type: 'belongs_to', sourceId: '11', targetId: 'm3'},
  {id: 'r1012', type: 'belongs_to', sourceId: '12', targetId: 'm3'},
  {id: 'r1013', type: 'belongs_to', sourceId: '13', targetId: 'm3'},
  {id: 'r1014', type: 'belongs_to', sourceId: '14', targetId: 'm3'},
  {id: 'r1015', type: 'belongs_to', sourceId: '15', targetId: 'm3'},
  {id: 'r1016', type: 'belongs_to', sourceId: '16', targetId: 'm3'},
  {id: 'r1017', type: 'belongs_to', sourceId: '17', targetId: 'm3'},
  {id: 'r1018', type: 'belongs_to', sourceId: '18', targetId: 'm4'},
  {id: 'r1019', type: 'belongs_to', sourceId: '19', targetId: 'm4'},
  {id: 'r1020', type: 'belongs_to', sourceId: '20', targetId: 'm4'},
  {id: 'r1021', type: 'belongs_to', sourceId: '21', targetId: 'm4'},
  {id: 'r1022', type: 'belongs_to', sourceId: '22', targetId: 'm4'},
  {id: 'r1023', type: 'belongs_to', sourceId: '23', targetId: 'm4'},
  {id: 'r1024', type: 'belongs_to', sourceId: '24', targetId: 'm5'},
  {id: 'r1025', type: 'belongs_to', sourceId: '25', targetId: 'm5'},
  {id: 'r1026', type: 'belongs_to', sourceId: '26', targetId: 'm5'},
  {id: 'r1027', type: 'belongs_to', sourceId: '27', targetId: 'm5'},
  {id: 'r1028', type: 'belongs_to', sourceId: '28', targetId: 'm5'},
  {id: 'r1029', type: 'belongs_to', sourceId: '29', targetId: 'm6'},
  {id: 'r1030', type: 'belongs_to', sourceId: '30', targetId: 'm6'},
  {id: 'r1031', type: 'belongs_to', sourceId: '31', targetId: 'm6'},
  {id: 'r1032', type: 'belongs_to', sourceId: '32', targetId: 'm6'},
  {id: 'r1033', type: 'belongs_to', sourceId: '33', targetId: 'm6'},
  {id: 'r1034', type: 'belongs_to', sourceId: '34', targetId: 'm6'},
  {id: 'r1035', type: 'belongs_to', sourceId: '35', targetId: 'm6'},
  {id: 'r1036', type: 'belongs_to', sourceId: '36', targetId: 'm6'},
  {id: 'r1037', type: 'belongs_to', sourceId: '37', targetId: 'm6'},
  {id: 'r1038', type: 'belongs_to', sourceId: '38', targetId: 'm6'},
  {id: 'r1039', type: 'belongs_to', sourceId: '39', targetId: 'm6'},
  {id: 'r1040', type: 'belongs_to', sourceId: '40', targetId: 'm6'},
  {id: 'r1041', type: 'belongs_to', sourceId: '41', targetId: 'm7'},
  {id: 'r1042', type: 'belongs_to', sourceId: '42', targetId: 'm7'},
  {id: 'r1043', type: 'belongs_to', sourceId: '43', targetId: 'm7'},
  {id: 'r1044', type: 'belongs_to', sourceId: '44', targetId: 'm8'},
  {id: 'r1045', type: 'belongs_to', sourceId: '45', targetId: 'm8'},
  {id: 'r1046', type: 'belongs_to', sourceId: '46', targetId: 'm8'},
  {id: 'r1047', type: 'belongs_to', sourceId: '47', targetId: 'm8'},

  {id: 'r1048', type: 'belongs_to', sourceId: 't1', targetId: 'Starfleet-Academy'},
  
  {id: 'r1051', type: 'belongs_to', sourceId: 'm1', targetId: 't1'},
  {id: 'r1052', type: 'belongs_to', sourceId: 'm2', targetId: 't1'},
  {id: 'r1053', type: 'belongs_to', sourceId: 'm3', targetId: 't1'},
  {id: 'r1054', type: 'belongs_to', sourceId: 'm4', targetId: 't1'},
  {id: 'r1055', type: 'belongs_to', sourceId: 'm5', targetId: 't1'},
  {id: 'r1056', type: 'belongs_to', sourceId: 'm6', targetId: 't1'},
  {id: 'r1057', type: 'belongs_to', sourceId: 'm7', targetId: 't1'},
  {id: 'r1058', type: 'belongs_to', sourceId: 'm8', targetId: 't1'},
]

// =====
// instantiate a new Xoces widget
// ========
var cw = xoces.widgets.XocesWidget.new({
  hierarchy: ['institution', 'track', 'module', 'outcome'],
  data: {
    entities: institutions.concat(tracks, modules, outcomes),
    relationships: relationships
  },
  currentLevelEntity: 'Starfleet-Academy',
  view: 'TREE_VIEW',
  entityLabelKey: 'name',
  nodeLabelKey: 'name',
  relationship: {
    parentType: 'belongs_to',
    sourceRef: 'sourceId',
    targetRef: 'targetId',
  },
  width: '100%',
  height: 900,
  colorScheme: 'dark',
  onMouseOverFinish: function(data) {
    // console.log('onMouseOverFinish: i was mouseovered!', data)
  },
  onMouseOutFinish: function(data) {
    // console.log('onMouseOutFinish: i was mouseovered!', data)
  },
  onClickFinish: function(data) {
    // console.log('onClickFinish: i was clicked!', data)
  }
});

// render it into the specified container
cw.render({
  container: 'xocesContainer'
});
