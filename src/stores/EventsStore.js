import { defineStore } from 'pinia'
export const useEventsStore = defineStore('eventsStore', {
  state: () => ({
    events: [
      {
        id: 1,
        title: 'Healthy Eating',
        date: '2024-10-01',
        organizer: 'Health Center',
        desc: 'Lecture on the basics of healthy eating, discussing common mistakes and healthy habits.',
        fullDesc:
          'The lecture will cover the fundamentals of healthy eating and how to balance it. Common mistakes in the diet and their impact on the body will be discussed. Attendees will receive advice on healthy eating habits. There will also be an opportunity to ask questions to specialists.',
        img: 'https://www.bsmu.edu.ua/wp-content/uploads/2019/03/4354.jpg'
      },
      {
        id: 2,
        title: 'Back Exercises',
        date: '2024-10-05',
        organizer: 'Physiotherapy Clinic',
        desc: 'Seminar on exercises to strengthen back muscles and prevent pain.',
        fullDesc:
          'This seminar will provide knowledge about exercises that help strengthen back muscles. Participants will learn how exercises can help in preventing back pain and improving posture. Techniques for proper execution of exercises will be discussed. Everyone will have the chance to test the techniques under the supervision of specialists.',
        img: 'https://poradumo.com.ua/wp-content/uploads/2016/01/d921bd08ea58fdb7c0c772093d4d7582.jpg'
      },
      {
        id: 3,
        title: 'Meditation and Stress',
        date: '2024-10-08',
        organizer: 'MindCare Medical Center',
        desc: 'Training on meditation techniques to reduce stress and improve emotional state.',
        fullDesc:
          'In this training, the basics of meditation will be presented to help reduce stress. Participants will learn basic relaxation and self-soothing techniques. Methods for managing emotions during stressful situations will also be discussed. Practical sessions will allow participants to reinforce their knowledge.',
        img: 'https://i0.wp.com/7dniv.rv.ua/wp-content/uploads/2024/09/medytacia.webp?fit=1001%2C501&ssl=1'
      },
      {
        id: 4,
        title: 'Cardio Training for Beginners',
        date: '2024-10-12',
        organizer: 'PulseFit Sports Club',
        desc: 'Training for beginners aimed at improving cardiovascular health.',
        fullDesc:
          'This training is suitable for those who are just starting to exercise. It aims to improve cardiovascular health and increase endurance. The instructor will demonstrate simple yet effective exercises to improve heart health. Regular sessions will help achieve better physical condition.',
        img: 'https://5element.ua/i/news/1808/7456__large.jpg'
      },
      {
        id: 5,
        title: 'Yoga Masterclass',
        date: '2024-10-15',
        organizer: 'Harmony Yoga Studio',
        desc: 'Masterclass for all levels where participants can learn basic yoga poses.',
        fullDesc:
          'The masterclass is suitable for anyone wanting to learn the basics of yoga or deepen their knowledge. The instructor will demonstrate basic poses and breathing techniques. Different styles of yoga and their effects on physical and mental health will be discussed. Participants will experience how yoga helps improve flexibility and balance.',
        img: 'https://shpolyanochka.com.ua/wp-content/uploads/2024/09/dyzajn-bez-nazvy-2023-06-21t151153855.jpg'
      },
      {
        id: 6,
        title: 'Basics of Healthy Sleep',
        date: '2024-10-18',
        organizer: 'Healthy Sleep Clinic',
        desc: 'Lecture on the importance of sleep for overall health and tips for improving its quality.',
        fullDesc:
          'The lecture will discuss the main factors that affect sleep quality. Participants will learn how lack of sleep affects the body and receive tips for improving sleep. Techniques for relaxation before sleep and a proper daily routine will be discussed. Information on the impact of sleep on emotional state will be provided.',
        img: 'https://svit-zdorovya.com/images/blog/3/%D0%9A%D0%B0%D0%BA_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE_%D0%B7%D0%B0%D1%81%D1%8B%D0%BF%D0%B0%D1%82%D1%8C._%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D1%81%D0%BD%D0%B0.jpg'
      },
      {
        id: 7,
        title: 'Breathing Techniques for Stress Reduction',
        date: '2024-10-20',
        organizer: 'BreathEasy Medical Center',
        desc: 'Seminar on various breathing techniques that help cope with stress.',
        fullDesc:
          'In this seminar, techniques for proper breathing that help reduce stress and anxiety will be demonstrated. Participants will learn about the importance of breathing for emotional and physical health. Practical sessions will allow everyone to try different methods. Techniques will be adapted for daily use.',
        img: 'https://healthpedia.com.ua/wp-content/uploads/2023/06/tehniki-dihannya.jpg'
      },
      {
        id: 8,
        title: 'Heart Health',
        date: '2024-10-22',
        organizer: 'HeartCare Cardiology Center',
        desc: 'Lecture on the prevention of heart diseases and reducing the risk of heart attacks.',
        fullDesc:
          'The lecture is dedicated to keeping the heart healthy and avoiding the risks of cardiovascular diseases. Participants will receive advice on lifestyle, nutrition, and physical activity. Risk factors such as high blood pressure and cholesterol will be discussed. The role of regular check-ups in maintaining heart health will also be examined.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDWdPIVKUca4vz6i1Xkp4JFUJuyWk1N4ZgQ&s'
      },
      {
        id: 9,
        title: 'Musculoskeletal Health',
        date: '2024-10-25',
        organizer: 'SpineCare Medical Center',
        desc: 'Lecture on maintaining spinal and joint health.',
        fullDesc:
          'The lecture will discuss how to maintain spinal and joint health in everyday life. Tips for preventing back pain, proper body posture, and physical activity will be provided. Treatment and rehabilitation methods for people with chronic problems will also be discussed. Participants will learn about modern approaches to treatment.',
        img: 'https://i.ytimg.com/vi/wP66gzyO_BE/maxresdefault.jpg'
      },
      {
        id: 10,
        title: 'Psychological Health at Work',
        date: '2024-10-28',
        organizer: 'Balance Psychological Center',
        desc: 'Seminar on maintaining psychological health in a constantly stressful work environment.',
        fullDesc:
          'This seminar will help understand how to maintain psychological health at the workplace. Participants will learn about the main causes of stress at work and techniques to cope with it. The balance between work and personal life will be discussed. Practical sessions will allow participants to master stress relief and emotional management techniques.',
        img: 'https://edu.mh4u.in.ua/wp-content/uploads/2020/05/IMG_5055-1024x576.jpg'
      },
      {
        id: 11,
        title: 'Healthy Lifestyle for Seniors',
        date: '2024-10-30',
        organizer: 'Health Center for Seniors',
        desc: 'Lecture for seniors on how to maintain activity and health in old age.',
        fullDesc:
          'The lecture is aimed at seniors who want to maintain an active lifestyle and stay healthy. Participants will learn about the importance of physical activity in old age, proper nutrition, and disease prevention. Advice on psychological health and social activity will also be provided. The role of preventive medical examinations will be discussed.',
        img: 'https://baysidehcr.com/wp-content/uploads/2023/02/healthy-seniors.jpg'
      },
      {
        id: 12,
        title: 'Eye Health',
        date: '2024-11-01',
        organizer: 'VisionCare Ophthalmology Center',
        desc: 'Lecture on the prevention of eye diseases and preserving vision.',
        fullDesc:
          'In this lecture, participants will learn how to maintain eye health and avoid common vision problems. Ways to prevent eye diseases will be discussed. The impact of nutrition and lifestyle on eye health will be emphasized. Participants will have the opportunity to ask questions and receive advice from specialists.',
        img: 'https://www.nvisioncenters.com/wp-content/uploads/eye-health-chart-1024x683.jpg'
      },
      {
        id: 13,
        title: 'Psychological Resilience',
        date: '2024-11-05',
        organizer: 'Resilience Psychological Center',
        desc: 'Training on building psychological resilience and coping with life challenges.',
        fullDesc:
          'This training will help participants develop psychological resilience in difficult situations. Techniques for managing stress and emotions will be discussed. The importance of support from loved ones and social networks will be emphasized. Practical sessions will allow everyone to practice techniques for coping with challenges.',
        img: 'https://wrspc.ca/wp-content/uploads/2020/10/psychological-needs.jpg'
      },
      {
        id: 14,
        title: 'Nutrition in Pregnancy',
        date: '2024-11-10',
        organizer: 'Maternity Health Center',
        desc: 'Lecture on the importance of proper nutrition during pregnancy.',
        fullDesc:
          'This lecture is aimed at pregnant women who want to learn about proper nutrition for the health of the mother and child. Participants will receive advice on what products to include in the diet during pregnancy. The role of vitamins and minerals will also be discussed. The importance of hydration and a healthy lifestyle will be emphasized.',
        img: 'https://flo.health/uploads/media/sulu-1230x-inset/05/7205-Pregnancy%20nutrition%2002_1006x755.jpg?v=1-0'
      },
      {
        id: 15,
        title: 'Healthy Skin',
        date: '2024-11-15',
        organizer: 'Dermatology Clinic',
        desc: 'Lecture on skin care and prevention of common skin diseases.',
        fullDesc:
          'The lecture will focus on the main principles of skin care and how to maintain its health. Participants will learn about common skin diseases and methods of their prevention. The impact of nutrition and lifestyle on skin health will also be discussed. Everyone will receive practical advice on skin care.',
        img: 'https://eminenceorganics.com/sites/default/files/article-image/eminence-organics-healthy-skin-tips.jpg'
      },
      {
        id: 16,
        title: 'Healthy Eating for Children',
        date: '2024-11-20',
        organizer: 'Healthy Childhood Center',
        desc: 'Lecture for parents on healthy nutrition for children.',
        fullDesc:
          'This lecture is aimed at parents who want to learn about healthy nutrition for their children. Participants will receive advice on how to create a balanced diet for kids. The importance of proper nutrition in childhood for future health will be emphasized. The role of snacks and sweet treats will also be discussed.',
        img: 'https://www.safefood.net/getmedia/851c812b-9487-4c28-ad60-9f373fda25e2/food-pyramid-age-kids.jpg?w=1708&h=1125&ext=.jpg&width=1360&resizemode=force'
      },
      {
        id: 17,
        title: 'Breastfeeding Basics',
        date: '2024-11-25',
        organizer: 'Maternity Health Center',
        desc: 'Lecture on breastfeeding techniques and benefits for mother and child.',
        fullDesc:
          'The lecture is aimed at new mothers who want to learn about breastfeeding. Participants will receive practical advice on how to establish breastfeeding and its benefits for health. The role of breastfeeding in child development and mother’s well-being will be discussed. Questions and concerns about breastfeeding will be addressed.',
        img: 'https://celebratebirth.info/wp-content/uploads/2019/07/Celebrate-Birth-Breastfeeding-Basics.png'
      },
      {
        id: 18,
        title: 'Mental Health in Families',
        date: '2024-12-01',
        organizer: 'Family Health Center',
        desc: 'Seminar on maintaining mental health in families.',
        fullDesc:
          'This seminar will help families understand the importance of mental health in family relationships. Participants will learn how to recognize signs of mental health issues in family members. Techniques for support and communication will be discussed. The role of empathy and understanding in maintaining healthy family relationships will be emphasized.',
        img: 'https://blog.kaplanco.com/hubfs/Imported_Blog_Media/mental-health-effects-on-families_a-1.jpg'
      }
    ],
    users: [
      {
        id: 1,
        name: 'Rick Samuel',
        email: 'rick@gmail.com'
      },
      {
        id: 2,
        name: 'Oleg Rewid',
        email: 'rewid@gmail.com'
      },
      {
        id: 3,
        name: 'Misha Polit',
        email: 'polit@gmail.com'
      },
      {
        id: 4,
        name: 'Dima Deroplik',
        email: 'deroplik@gmail.com'
      },
      {
        id: 5,
        name: 'Victor Berup',
        email: 'berup@gmail.com'
      }
    ]
  }),
  actions: {}
})
