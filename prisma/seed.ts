import { PrismaClient, Role, ApplicationStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

const classrooms = [
  { name: 'Crèche', level: 1 },
  { name: 'Nursery 1', level: 2 },
  { name: 'Nursery 2', level: 3 },
  { name: 'Kindergarten 1', level: 4 },
  { name: 'Kindergarten 2', level: 5 },
  { name: 'Primary 1', level: 6 },
  { name: 'Primary 2', level: 7 },
  { name: 'Primary 3', level: 8 },
  { name: 'Primary 4', level: 9 },
  { name: 'Primary 5', level: 10 },
];

const subjectsMap: Record<number, string[]> = {
  1: [
    { name: 'Sensorial', icon: 'eye' },
    { name: 'Fine Motor', icon: 'hand' },
    { name: 'Practical Life', icon: 'home' },
    { name: 'Language', icon: 'book' },
    { name: 'Music', icon: 'music' },
  ],
  2: [
    { name: 'Sensorial', icon: 'eye' },
    { name: 'Fine Motor', icon: 'hand' },
    { name: 'Practical Life', icon: 'home' },
    { name: 'Language & Literacy', icon: 'book-open' },
    { name: 'Mathematics', icon: 'calculator' },
    { name: 'Music', icon: 'music' },
    { name: 'Art & Craft', icon: 'palette' },
  ],
  3: [
    { name: 'Language & Literacy', icon: 'book-open' },
    { name: 'Mathematics', icon: 'calculator' },
    { name: 'Sensorial', icon: 'eye' },
    { name: 'Science Exploration', icon: 'microscope' },
    { name: 'Geography', icon: 'globe' },
    { name: 'Art & Craft', icon: 'palette' },
    { name: 'Music', icon: 'music' },
    { name: 'Physical Education', icon: 'activity' },
  ],
  4: [
    { name: 'English Language', icon: 'book-open' },
    { name: 'Mathematics', icon: 'calculator' },
    { name: 'Science', icon: 'microscope' },
    { name: 'Geography', icon: 'globe' },
    { name: 'History', icon: 'calendar' },
    { name: 'Art & Craft', icon: 'palette' },
    { name: 'Music', icon: 'music' },
    { name: 'Physical Education', icon: 'activity' },
    { name: 'French', icon: 'languages' },
  ],
  5: [
    { name: 'English Language', icon: 'book-open' },
    { name: 'Mathematics', icon: 'calculator' },
    { name: 'Science', icon: 'microscope' },
    { name: 'Geography', icon: 'globe' },
    { name: 'History', icon: 'calendar' },
    { name: 'Art & Craft', icon: 'palette' },
    { name: 'Music', icon: 'music' },
    { name: 'Physical Education', icon: 'activity' },
    { name: 'French', icon: 'languages' },
    { name: 'Computer Skills', icon: 'laptop' },
  ],
};

// Fill in missing levels with full curriculum
for (let level = 6; level <= 10; level++) {
  subjectsMap[level] = [
    { name: 'English Language', icon: 'book-open' },
    { name: 'Mathematics', icon: 'calculator' },
    { name: 'Science', icon: 'microscope' },
    { name: 'Geography', icon: 'globe' },
    { name: 'History', icon: 'calendar' },
    { name: 'Art & Craft', icon: 'palette' },
    { name: 'Music', icon: 'music' },
    { name: 'Physical Education', icon: 'activity' },
    { name: 'French', icon: 'languages' },
    { name: 'Computer Skills', icon: 'laptop' },
  ];
}

const teachers = [
  { name: 'Amara Okafor', email: 'amara.okafor@brightlane.com' },
  { name: 'Chioma Adeyemi', email: 'chioma.adeyemi@brightlane.com' },
  { name: 'Tunde Oluwaseun', email: 'tunde.oluwaseun@brightlane.com' },
  { name: 'Zainab Hassan', email: 'zainab.hassan@brightlane.com' },
  { name: 'James Mwangi', email: 'james.mwangi@brightlane.com' },
  { name: 'Fatima Al-Rashid', email: 'fatima.alrashid@brightlane.com' },
];

const parents = [
  { name: 'Mr. Okoro Emmanuel', email: 'emmanu.okoro@email.com', phone: '+234-805-123-4561' },
  { name: 'Mrs. Ada Eze', email: 'ada.eze@email.com', phone: '+234-805-123-4562' },
  { name: 'Dr. Yusuf Obi', email: 'yusuf.obi@email.com', phone: '+234-805-123-4563' },
  { name: 'Ms. Blessing Akinyemi', email: 'blessing.akinyemi@email.com', phone: '+234-805-123-4564' },
  { name: 'Mr. Samuel Kipchoge', email: 'samuel.kipchoge@email.com', phone: '+254-722-123-456' },
  { name: 'Mrs. Grace Koech', email: 'grace.koech@email.com', phone: '+254-722-123-457' },
  { name: 'Prof. Kwame Asante', email: 'kwame.asante@email.com', phone: '+233-244-123-458' },
  { name: 'Ms. Nneka Obi', email: 'nneka.obi@email.com', phone: '+234-805-123-4565' },
];

const students = [
  { name: 'Miracle Okoro', dateOfBirth: new Date('2020-03-15'), parentIndex: 0 },
  { name: 'Chisom Eze', dateOfBirth: new Date('2020-06-22'), parentIndex: 1 },
  { name: 'Aminat Yusuf', dateOfBirth: new Date('2020-01-10'), parentIndex: 2 },
  { name: 'Zuri Akinyemi', dateOfBirth: new Date('2020-09-18'), parentIndex: 3 },
  { name: 'Liam Kipchoge', dateOfBirth: new Date('2020-04-25'), parentIndex: 4 },
  { name: 'Amara Koech', dateOfBirth: new Date('2020-07-12'), parentIndex: 5 },
  { name: 'Kwesi Asante', dateOfBirth: new Date('2020-02-08'), parentIndex: 6 },
  { name: 'Nneka Obi Jr', dateOfBirth: new Date('2020-05-30'), parentIndex: 7 },
];

const decks = [
  { title: 'Alphabet', slug: 'alphabet', icon: 'type' },
  { title: 'Numbers 1–20', slug: 'numbers-1-20', icon: 'hash' },
  { title: 'Animals', slug: 'animals', icon: 'bug' },
  { title: 'Shapes', slug: 'shapes', icon: 'square' },
  { title: 'Colours', slug: 'colours', icon: 'palette' },
  { title: 'Sight Words', slug: 'sight-words', icon: 'eye' },
];

const alphabetCards = [
  { front: 'A', back: 'Apple' },
  { front: 'B', back: 'Ball' },
  { front: 'C', back: 'Cat' },
  { front: 'D', back: 'Dog' },
  { front: 'E', back: 'Egg' },
  { front: 'F', back: 'Fish' },
  { front: 'G', back: 'Green' },
  { front: 'H', back: 'House' },
  { front: 'I', back: 'Ice' },
  { front: 'J', back: 'Jungle' },
  { front: 'K', back: 'Kite' },
  { front: 'L', back: 'Lion' },
];

const numberCards = [
  { front: '1', back: 'One' },
  { front: '2', back: 'Two' },
  { front: '3', back: 'Three' },
  { front: '4', back: 'Four' },
  { front: '5', back: 'Five' },
  { front: '6', back: 'Six' },
  { front: '7', back: 'Seven' },
  { front: '8', back: 'Eight' },
  { front: '9', back: 'Nine' },
  { front: '10', back: 'Ten' },
  { front: '11', back: 'Eleven' },
  { front: '12', back: 'Twelve' },
];

const animalCards = [
  { front: '🦁', back: 'Lion' },
  { front: '🐘', back: 'Elephant' },
  { front: '🦒', back: 'Giraffe' },
  { front: '🐅', back: 'Tiger' },
  { front: '🦓', back: 'Zebra' },
  { front: '🐒', back: 'Monkey' },
  { front: '🦜', back: 'Parrot' },
  { front: '🦋', back: 'Butterfly' },
  { front: '🐢', back: 'Turtle' },
  { front: '🦅', back: 'Eagle' },
  { front: '🦁', back: 'Lioness' },
  { front: '🦁', back: 'Cubs' },
];

const shapeCards = [
  { front: '⭕', back: 'Circle' },
  { front: '▢', back: 'Square' },
  { front: '▲', back: 'Triangle' },
  { front: '⬙', back: 'Rectangle' },
  { front: '🌟', back: 'Star' },
  { front: '💧', back: 'Drop' },
  { front: '❤', back: 'Heart' },
  { front: '◆', back: 'Diamond' },
  { front: '⬡', back: 'Hexagon' },
  { front: '🌙', back: 'Moon' },
  { front: '🔔', back: 'Bell' },
  { front: '🎲', back: 'Cube' },
];

const colourCards = [
  { front: '🔴', back: 'Red' },
  { front: '🟠', back: 'Orange' },
  { front: '🟡', back: 'Yellow' },
  { front: '🟢', back: 'Green' },
  { front: '🔵', back: 'Blue' },
  { front: '🟣', back: 'Purple' },
  { front: '🤍', back: 'White' },
  { front: '🤎', back: 'Brown' },
  { front: '🖤', back: 'Black' },
  { front: '🩶', back: 'Gray' },
  { front: '🩷', back: 'Pink' },
  { front: '🩵', back: 'Cyan' },
];

const sightWordsCards = [
  { front: 'the', back: 'Common article' },
  { front: 'and', back: 'Conjunction' },
  { front: 'a', back: 'Article' },
  { front: 'to', back: 'Preposition' },
  { front: 'of', back: 'Preposition' },
  { front: 'in', back: 'Preposition' },
  { front: 'is', back: 'Verb: to be' },
  { front: 'that', back: 'Pronoun' },
  { front: 'it', back: 'Pronoun' },
  { front: 'for', back: 'Preposition' },
  { front: 'you', back: 'Pronoun' },
  { front: 'with', back: 'Preposition' },
];

const cardsMap: Record<string, Array<{ front: string; back: string }>> = {
  'alphabet': alphabetCards,
  'numbers-1-20': numberCards,
  'animals': animalCards,
  'shapes': shapeCards,
  'colours': colourCards,
  'sight-words': sightWordsCards,
};

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.contactMessage.deleteMany();
  await prisma.admissionApplication.deleteMany();
  await prisma.meetingRequest.deleteMany();
  await prisma.message.deleteMany();
  await prisma.thread.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.flashcard.deleteMany();
  await prisma.deck.deleteMany();
  await prisma.timetableEntry.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.student.deleteMany();
  await prisma.post.deleteMany();
  await prisma.classRoom.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminPassword = await hashPassword('Password123!');
  const admin = await prisma.user.create({
    data: {
      email: 'admin@brightlanemontessori.com',
      name: 'Admin User',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });
  console.log('✅ Admin user created');

  // Create teachers
  const createdTeachers = [];
  for (const teacher of teachers) {
    const hashedPassword = await hashPassword('Password123!');
    const user = await prisma.user.create({
      data: {
        email: teacher.email,
        name: teacher.name,
        password: hashedPassword,
        role: Role.TEACHER,
      },
    });
    createdTeachers.push(user);
  }
  console.log('✅ Teachers created');

  // Create parents
  const createdParents = [];
  for (const parent of parents) {
    const hashedPassword = await hashPassword('Password123!');
    const user = await prisma.user.create({
      data: {
        email: parent.email,
        name: parent.name,
        password: hashedPassword,
        role: Role.PARENT,
        phone: parent.phone,
      },
    });
    createdParents.push(user);
  }
  console.log('✅ Parent users created');

  // Create classrooms with subjects, timetables, decks, and flashcards
  const createdClassrooms = [];
  for (const classroom of classrooms) {
    const slug = classroom.name.toLowerCase().replace(/\s+/g, '-');
    const created = await prisma.classRoom.create({
      data: {
        name: classroom.name,
        slug,
        level: classroom.level,
        capacity: 20,
      },
    });
    createdClassrooms.push(created);

    // Create subjects for this classroom
    const subjectList = subjectsMap[classroom.level] || subjectsMap[5];
    for (const subject of subjectList) {
      const subjectSlug = subject.name.toLowerCase().replace(/\s+/g, '-');
      await prisma.subject.create({
        data: {
          name: subject.name,
          slug: subjectSlug,
          icon: subject.icon,
          classId: created.id,
        },
      });
    }

    // Create timetable entries for the classroom
    const subjects = await prisma.subject.findMany({ where: { classId: created.id } });
    let subjectIndex = 0;
    for (let day = 0; day < 5; day++) {
      for (let period = 1; period <= 7; period++) {
        const hour = 8 + Math.floor((period - 1) / 2);
        const minute = (period - 1) % 2 === 0 ? 0 : 30;
        const startTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        const endHour = minute === 0 ? hour : hour + 1;
        const endMinute = minute === 0 ? 30 : 0;
        const endTime = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;

        await prisma.timetableEntry.create({
          data: {
            dayOfWeek: day,
            period,
            startTime,
            endTime,
            classId: created.id,
            subjectId: subjects[subjectIndex % subjects.length].id,
          },
        });
        subjectIndex++;
      }
    }

    // Create flashcard decks
    for (const deck of decks) {
      const createdDeck = await prisma.deck.create({
        data: {
          title: deck.title,
          slug: deck.slug,
          icon: deck.icon,
          classId: created.id,
        },
      });

      // Add flashcards to deck
      const cards = cardsMap[deck.slug];
      for (let i = 0; i < cards.length; i++) {
        await prisma.flashcard.create({
          data: {
            front: cards[i].front,
            back: cards[i].back,
            order: i + 1,
            deckId: createdDeck.id,
          },
        });
      }
    }
  }
  console.log('✅ Classrooms, subjects, timetables, and flashcards created');

  // Create students
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const parent = parents[student.parentIndex];
    const randomClassroom = createdClassrooms[Math.floor(Math.random() * createdClassrooms.length)];

    await prisma.student.create({
      data: {
        name: student.name,
        dateOfBirth: student.dateOfBirth,
        parentName: parent.name,
        parentEmail: parent.email,
        parentPhone: parent.phone,
        address: '245 Willow Grove Lane, Austin, TX',
        classId: randomClassroom.id,
      },
    });
  }
  console.log('✅ Students created');

  // Create announcements (2 pinned Admissions)
  const admissionsAnnouncements = [
    {
      title: 'Admissions Open for 2026–2027 Academic Session',
      content:
        'Welcome! BrightLane Montessori is now accepting applications for all class levels. Our warm, nurturing environment fosters independence, creativity, and confident learners. Schedule a tour today to learn more about our programs.',
      isPinned: true,
    },
    {
      title: 'Early Bird Admission Discount Extended',
      content:
        'Families who enroll by October 31, 2026, will receive a 10% tuition discount for the first academic year. Limited spots available. Apply now to secure your child\'s place at BrightLane.',
      isPinned: true,
    },
    {
      title: 'September Break Closure',
      content:
        'BrightLane Montessori will be closed September 1–3 for staff development. Classes resume September 4. Have a restful break!',
      isPinned: false,
    },
    {
      title: 'Parent–Teacher Conference Schedule Released',
      content:
        'Mark your calendars! Parent–teacher conferences will be held October 15–19. Sign-up sheets are posted in the school office.',
      isPinned: false,
    },
    {
      title: 'Celebrate Montessori Day with Us',
      content:
        'Join us on August 31 for a special celebration of Maria Montessori\'s birthday. There will be special activities, snacks, and a chance to learn about Montessori philosophy.',
      isPinned: false,
    },
    {
      title: 'Flashcard Learning Initiative',
      content:
        'Parents are encouraged to use our digital flashcard decks at home. Children can practice Alphabet, Numbers, Animals, Shapes, Colours, and Sight Words at their own pace.',
      isPinned: false,
    },
    {
      title: 'Gallery Photos: Field Day Fun',
      content:
        'Check out our gallery for photos from yesterday\'s Field Day! A huge thank you to all the volunteers who made this event memorable.',
      isPinned: false,
    },
    {
      title: 'Holiday Camp Registration',
      content:
        'Summer holiday camp is filling up fast! Register now for a week of hands-on learning, creative play, and outdoor adventures.',
      isPinned: false,
    },
  ];

  for (const announcement of admissionsAnnouncements) {
    const randomClassroom = createdClassrooms[Math.floor(Math.random() * createdClassrooms.length)];
    await prisma.announcement.create({
      data: {
        title: announcement.title,
        content: announcement.content,
        isPinned: announcement.isPinned,
        classId: announcement.isPinned ? undefined : randomClassroom.id,
      },
    });
  }
  console.log('✅ Announcements created');

  // Create teacher posts
  const teacherPosts = [
    {
      title: 'The Power of Practical Life Activities',
      excerpt: 'Discover how everyday tasks build confidence and independence.',
      content:
        'Practical life activities are at the heart of Montessori education. When children learn to pour, wash, sweep, and care for their environment, they develop fine motor control, focus, and self-esteem. These hands-on experiences build real-world skills and foster a sense of responsibility.',
      authorIndex: 0,
    },
    {
      title: 'Fostering Love of Reading in Young Learners',
      excerpt: 'Tips for parents and teachers to inspire a lifelong love of books.',
      content:
        'Reading opens doors to new worlds and ideas. At BrightLane, we pair beautiful, age-appropriate books with rich discussions and creative follow-up activities. Children who love reading become confident learners.',
      authorIndex: 1,
    },
    {
      title: 'Understanding Child-Led Learning',
      excerpt: 'How freedom and choice empower our students.',
      content:
        'Child-led learning means children follow their interests while we gently guide them toward educational goals. This approach builds intrinsic motivation, creativity, and a genuine love for learning. At BrightLane, we honor each child\'s unique learning journey.',
      authorIndex: 2,
    },
    {
      title: 'Sensorial Development: The Foundation of Learning',
      excerpt: 'How we use all five senses to explore and understand the world.',
      content:
        'Sensorial activities help children refine their perception of color, shape, texture, sound, and smell. Through exploration with our Montessori materials, children develop concentration, observe details, and build a rich foundation for advanced learning.',
      authorIndex: 3,
    },
    {
      title: 'The Importance of Mixed-Age Classrooms',
      excerpt: 'Benefits of learning together across age groups.',
      content:
        'Mixed-age classrooms create a natural community where older children mentor younger ones. This arrangement builds leadership, empathy, and peer learning. Younger children benefit from seeing what they\'ll accomplish next, while older children develop responsibility through helping others.',
      authorIndex: 4,
    },
    {
      title: 'Building Confidence Through Mistakes',
      excerpt: 'How we celebrate errors as part of the learning process.',
      content:
        'At BrightLane, we view mistakes as learning opportunities, not failures. When children feel safe to explore, try, and even fail, they develop resilience, creativity, and a growth mindset. Every mistake is a step toward mastery.',
      authorIndex: 5,
    },
  ];

  for (const post of teacherPosts) {
    const slug = post.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    const randomClassroom = createdClassrooms[Math.floor(Math.random() * createdClassrooms.length)];
    await prisma.post.create({
      data: {
        title: post.title,
        slug,
        excerpt: post.excerpt,
        content: post.content,
        publishedAt: new Date(),
        authorId: createdTeachers[post.authorIndex].id,
        classId: randomClassroom.id,
      },
    });
  }
  console.log('✅ Teacher posts created');

  // Create discussion threads with messages
  const threadTopics = [
    {
      title: 'Helping Children Develop Independence at Home',
      authorIndex: 0,
      messages: [
        { authorIndex: 1, content: 'Great topic! I\'ve found that giving children age-appropriate chores helps tremendously.' },
        { authorIndex: 2, content: 'Our daughter loves helping with laundry now. It\'s amazing to watch her confidence grow!' },
      ],
    },
    {
      title: 'Art and Creativity in the Classroom',
      authorIndex: 1,
      messages: [
        { authorIndex: 3, content: 'The children created such beautiful watercolor paintings this week!' },
        { authorIndex: 4, content: 'Does anyone have ideas for incorporating music into art activities?' },
      ],
    },
    {
      title: 'Transitions: Preparing Children for Change',
      authorIndex: 2,
      messages: [
        { authorIndex: 5, content: 'We use visual schedules to help children understand what\'s coming next.' },
        { authorIndex: 0, content: 'That\'s an excellent strategy. Predictability really helps ease anxiety.' },
      ],
    },
  ];

  const createdThreads = [];
  for (const threadTopic of threadTopics) {
    const slug = threadTopic.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    const randomClassroom = createdClassrooms[Math.floor(Math.random() * createdClassrooms.length)];
    const thread = await prisma.thread.create({
      data: {
        title: threadTopic.title,
        slug,
        authorId: createdTeachers[threadTopic.authorIndex].id,
        classId: randomClassroom.id,
      },
    });
    createdThreads.push(thread);

    // Add messages to thread
    for (const message of threadTopic.messages) {
      await prisma.message.create({
        data: {
          content: message.content,
          authorId: createdTeachers[message.authorIndex].id,
          threadId: thread.id,
        },
      });
    }
  }
  console.log('✅ Discussion threads created');

  // Create meeting requests
  const meetingRequests = [
    {
      title: 'Parent–Teacher Conference: Amara Okafor',
      description: 'Discuss Amara\'s progress in language and mathematics.',
      scheduledAt: new Date('2026-10-15T10:00:00'),
      authorIndex: 0,
    },
    {
      title: 'Enrollment Discussion: New Family',
      description: 'Initial consultation regarding enrollment and programs.',
      scheduledAt: new Date('2026-10-08T14:00:00'),
      authorIndex: 1,
    },
  ];

  for (const request of meetingRequests) {
    const randomThread = createdThreads[Math.floor(Math.random() * createdThreads.length)];
    await prisma.meetingRequest.create({
      data: {
        title: request.title,
        description: request.description,
        scheduledAt: request.scheduledAt,
        authorId: createdTeachers[request.authorIndex].id,
        threadId: randomThread.id,
      },
    });
  }
  console.log('✅ Meeting requests created');

  // Create admission applications
  const admissionApplications = [
    {
      studentName: 'Chisom Eze',
      parentName: 'Mr. Emeka Eze',
      email: 'emeka.eze@email.com',
      phone: '+234-805-987-6543',
      address: '12 Lagos Avenue, Lagos, Nigeria',
      message: 'We are excited about BrightLane\'s approach and would like to enroll our daughter.',
      status: ApplicationStatus.ACCEPTED,
    },
    {
      studentName: 'Liam Kipchoge',
      parentName: 'Mr. David Kipchoge',
      email: 'david.kipchoge@email.com',
      phone: '+254-722-654-3210',
      address: '45 Nairobi Drive, Nairobi, Kenya',
      message: 'Looking for a Montessori program for our son.',
      status: ApplicationStatus.REVIEWING,
    },
    {
      studentName: 'Zuri Akinyemi',
      parentName: 'Mrs. Folake Akinyemi',
      email: 'folake.akinyemi@email.com',
      phone: '+234-805-555-4444',
      address: '78 Ikoyi Street, Lagos, Nigeria',
      message: 'Interested in learning more about the curriculum and teaching methods.',
      status: ApplicationStatus.PENDING,
    },
  ];

  for (const application of admissionApplications) {
    const randomParent = createdParents[Math.floor(Math.random() * createdParents.length)];
    await prisma.admissionApplication.create({
      data: {
        studentName: application.studentName,
        parentName: application.parentName,
        email: application.email,
        phone: application.phone,
        address: application.address,
        message: application.message,
        status: application.status,
        authorId: randomParent.id,
      },
    });
  }
  console.log('✅ Admission applications created');

  // Create contact messages
  const contactMessages = [
    {
      name: 'Oluwatoyin Adeleke',
      email: 'oluwatoyin.adeleke@email.com',
      phone: '+234-805-111-2222',
      subject: 'Inquiry About Summer Programs',
      message: 'Hello, I am interested in your summer holiday camp. Can you provide more details?',
    },
    {
      name: 'Amina Hassan',
      email: 'amina.hassan@email.com',
      phone: '+234-806-333-4444',
      subject: 'Feedback on Recent Field Day',
      message: 'Just wanted to say how much our family enjoyed the Field Day event. Great organization!',
    },
    {
      name: 'Dr. Kofi Mensah',
      email: 'kofi.mensah@email.com',
      phone: '+233-244-555-6666',
      subject: 'Partnership Opportunity',
      message: 'We represent an educational technology company interested in partnering with schools. Let\'s discuss.',
    },
    {
      name: 'Grace Okafor',
      email: 'grace.okafor@email.com',
      phone: '+234-807-777-8888',
      subject: 'Tuition Payment Plan',
      message: 'Could we arrange a flexible payment plan for tuition? Please let me know if this is possible.',
    },
  ];

  for (const message of contactMessages) {
    await prisma.contactMessage.create({
      data: {
        name: message.name,
        email: message.email,
        phone: message.phone,
        subject: message.subject,
        message: message.message,
      },
    });
  }
  console.log('✅ Contact messages created');

  console.log('\n✅ Seed completed successfully!\n');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
