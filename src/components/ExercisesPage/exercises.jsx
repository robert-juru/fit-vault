const absExercises = [
  {
    name: "Crunches",
    muscleGroup: "Abs",
    description:
      "1. Lie on your back with your knees bent and feet flat on the floor. \
                      2. Place your hands behind your head, elbows pointing out. \
                      3. Engage your core and lift your shoulders off the floor, curling towards your knees. \
                      4. Pause at the top, then slowly lower back down.",
    exerciseImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HFNmkTb2BRxKZLaquJVjpliLJpkY7ZEuAA&s",
    video: "https://www.youtube.com/watch?v=MKmrqcoCZ-M",
  },
  {
    name: "Plank",
    muscleGroup: "Abs",
    description:
      "1. Start in a push-up position with your forearms on the ground, elbows directly under your shoulders. \
                      2. Keep your body in a straight line from head to heels. \
                      3. Engage your core and hold the position, avoiding sagging or lifting your hips.",
    exerciseImage:
      "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=0.668xw:1.00xh;0.117xw,0&resize=1200:*",
    video: "https://www.youtube.com/watch?v=Ff4_A3y7JR0",
  },
  {
    name: "Hanging Leg Raise",
    muscleGroup: "Abs",
    description:
      "1. Hang from a pull-up bar with an overhand grip, arms fully extended. \
                      2. Keep your legs straight and together. \
                      3. Engage your core and lift your legs up until they are parallel to the floor or higher. \
                      4. Slowly lower them back to the starting position.",
    exerciseImage:
      "https://www.wikihow.com/images/thumb/a/a7/Do-a-Hanging-Leg-Raise-Step-5-Version-2.jpg/v4-460px-Do-a-Hanging-Leg-Raise-Step-5-Version-2.jpg",
    video: "https://www.youtube.com/watch?v=7FwGZ8qY5OU",
  },
  {
    name: "Bicycle Crunches",
    muscleGroup: "Abs",
    description:
      "1. Lie on your back with your hands behind your head and legs raised, knees bent at 90 degrees. \
                      2. Lift your shoulder blades off the ground. \
                      3. Twist your torso to bring your right elbow towards your left knee while straightening your right leg. \
                      4. Alternate sides in a pedaling motion.",
    exerciseImage:
      "https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-Exercises-How_To_Do_A_Bicycle_Crunch-Step_By_Step_6?fmt=auto&h=545&w=1440&sm=c&qlt=default&$qlt$&$poi$",
    video: "https://www.youtube.com/watch?v=1we3bh9uhqY",
  },
  {
    name: "Russian Twists",
    muscleGroup: "Abs",
    description:
      "1. Sit on the floor with your knees bent and feet slightly elevated. \
                      2. Lean back slightly to engage your core, keeping your back straight. \
                      3. Hold your hands together or a weight in front of you. \
                      4. Twist your torso to the right, then to the left to complete one rep.",
    exerciseImage:
      "https://media1.popsugar-assets.com/files/thumbor/Vv1TM93xqKvgM9IOWI8BoML88D8=/fit-in/2160x1484/top/filters:format_auto():extract_cover():upscale()/2024/01/02/752/n/1922729/3300e166ea0ccfe2_PS23_Fitness_Workout_14_Move_10_Russian_Twist_Alt.jpg",
    video: "https://www.youtube.com/watch?v=wkD8rjkodUI",
  },
  {
    name: "Mountain Climbers",
    muscleGroup: "Abs",
    description:
      "1. Start in a high plank position with your hands under your shoulders. \
                      2. Drive your right knee towards your chest. \
                      3. Quickly switch, bringing your left knee towards your chest while extending your right leg back. \
                      4. Continue alternating legs at a fast pace.",
    exerciseImage:
      "https://www.verywellfit.com/thmb/cVThoNaGu4-cHrt1f9NTv-JIR-U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-MountainClimb-56fafe605f9b5829867945c0.jpg",
    video: "https://www.youtube.com/watch?v=De3Gl-nC7IQ",
  },
  {
    name: "V-Ups",
    muscleGroup: "Abs",
    description:
      "1. Lie on your back with your legs straight and arms extended overhead. \
                      2. Simultaneously lift your legs and torso off the ground, reaching your hands towards your feet. \
                      3. Keep your legs straight and your core engaged. \
                      4. Lower back down to the starting position with control.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/Main-Image_45f524df-655b-4af5-bbfc-1205a914502f.jpg?v=1668779346",
    video: "https://www.youtube.com/watch?v=iP2fjvG0g3w",
  },
  {
    name: "Flutter Kicks",
    muscleGroup: "Abs",
    description:
      "1. Lie on your back with your legs extended and hands under your hips for support. \
                      2. Lift your legs off the ground a few inches. \
                      3. Rapidly alternate kicking your legs up and down while keeping them straight. \
                      4. Engage your core and avoid letting your lower back arch off the ground.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/Flutter_Kicks.png?v=1660228873",
    video: "https://www.youtube.com/watch?v=ANVdMDaYRts",
  },
  {
    name: "Cable Crunch",
    muscleGroup: "Abs",
    description:
      "1. Attach a rope handle to a high pulley on a cable machine. \
                      2. Kneel facing the machine, holding the rope at the sides of your head. \
                      3. Crunch forward by engaging your core, bringing your elbows towards your thighs. \
                      4. Slowly return to the starting position while controlling the resistance.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/1_f607c1e6-fb1a-45f8-bb2e-4dbf0ea4827f.jpg?v=1647865926",
    video: "https://www.youtube.com/watch?v=ToJeyhydUxU",
  },
  {
    name: "Decline Sit-Up",
    muscleGroup: "Abs",
    description:
      "1. Sit on a decline bench with your feet secured under the foot pads. \
                      2. Cross your arms over your chest or place them behind your head. \
                      3. Lower your torso back until it's just above the bench. \
                      4. Engage your abs and sit up, bringing your chest towards your knees.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/1_044424fd-62af-4b05-8d1f-ada1920bff63.jpg?v=1648738220",
    video: "https://www.youtube.com/watch?v=QhGU5cmNZds",
  },
];

const bicepsExercises = [
  {
    name: "Barbell Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell with an underhand grip. \
                      2. Keep your elbows close to your torso and your back straight. \
                      3. Curl the barbell up towards your chest, contracting your biceps. \
                      4. Slowly lower the barbell back to the starting position.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2022/03/Black-fitness-model-demonstrating-how-to-do-the-drag-curl-exercise-in-the-gym.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=JnLFSFurrqQ",
  },
  {
    name: "Dumbbell Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand with a dumbbell in each hand, palms facing forward. \
                      2. Keep your elbows close to your torso and curl the weights up towards your shoulders. \
                      3. Squeeze your biceps at the top, then slowly lower the dumbbells back down.",
    exerciseImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLN7-qBd2rziOVeKjZ1qc30Y0axbd6x_dpg&s",
    video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
  },
  {
    name: "Hammer Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing each other). \
                      2. Keep your elbows close to your torso and curl the weights up towards your shoulders. \
                      3. Pause at the top, then lower the dumbbells back to the starting position.",
    exerciseImage:
      "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/05/hammer-curl-top-position.png?resize=750%2C753&ssl=1",
    video: "https://www.youtube.com/watch?v=zC3nLlEvin4",
  },
  {
    name: "Preacher Curl",
    muscleGroup: "Biceps",
    description:
      "1. Sit on a preacher bench and hold a barbell or dumbbell with an underhand grip. \
                      2. Rest your upper arms on the bench pad. \
                      3. Curl the weight towards your shoulders, keeping your upper arms stationary. \
                      4. Lower the weight back down with control.",
    exerciseImage:
      "https://www.trainheroic.com/wp-content/uploads/2023/01/AdobeStock_186644984-TH-jpg.webp",
    video: "https://www.youtube.com/watch?v=vngli9UR6Hw",
  },
  {
    name: "Concentration Curl",
    muscleGroup: "Biceps",
    description:
      "1. Sit on a bench with your legs spread, holding a dumbbell in one hand. \
                      2. Rest your upper arm against your inner thigh. \
                      3. Curl the dumbbell towards your shoulder, focusing on squeezing your biceps. \
                      4. Lower the dumbbell back down slowly. Repeat on the other arm.",
    exerciseImage:
      "https://viewsfromhere.com/wp-content/uploads/2023/07/concentration-curls-720x1080.jpg",
    video: "https://www.youtube.com/watch?v=0AUGkch3tzc",
  },
  {
    name: "Cable Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand facing a cable machine with a low pulley. Attach a straight or EZ bar to the pulley. \
                      2. Grab the bar with an underhand grip, arms extended and elbows close to your torso. \
                      3. Curl the bar up towards your chest, keeping your elbows stationary. \
                      4. Lower the bar back to the starting position.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/12/standing-cable-curl2.jpg?quality=55&strip=all",
    video: "https://www.youtube.com/watch?v=NFzTWp2qpiE",
  },
  {
    name: "Incline Dumbbell Curl",
    muscleGroup: "Biceps",
    description:
      "1. Sit on an incline bench with a dumbbell in each hand, arms fully extended and palms facing forward. \
                      2. Curl the dumbbells towards your shoulders while keeping your upper arms stationary. \
                      3. Squeeze your biceps at the top, then slowly lower the dumbbells back down.",
    exerciseImage:
      "https://origym.ie/files/img_cache/3658/1920_1610990505_Alternatinginclinedumbbellcurlstartingpositionimage.jpg?1610990517",
    video: "https://www.youtube.com/watch?v=aTYlqC_JacQ",
  },
  {
    name: "EZ-Bar Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand with your feet shoulder-width apart, holding an EZ-bar with an underhand grip. \
                      2. Keep your elbows close to your torso and curl the bar up towards your shoulders. \
                      3. Squeeze your biceps at the top, then slowly lower the bar back to the starting position.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/882r52chfQqDHNLeEAUnUB.jpg",
    video: "https://www.youtube.com/watch?v=6LrOTcr595A",
  },
  {
    name: "Spider Curl",
    muscleGroup: "Biceps",
    description:
      "1. Lie face down on an incline bench with your arms hanging straight down, holding dumbbells. \
                      2. Curl the dumbbells towards your shoulders, keeping your upper arms stationary. \
                      3. Squeeze your biceps at the top, then lower the dumbbells back down.",
    exerciseImage:
      "https://images.squarespace-cdn.com/content/v1/5f5e8592d2b0854b18af6975/ba4134fc-64a2-40a5-8ef3-801e6529c2c7/Spider+Curl.jpg",
    video: "https://www.youtube.com/watch?v=ke2shAeQ0O8",
  },
  {
    name: "Reverse Curl",
    muscleGroup: "Biceps",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. \
                      2. Keep your elbows close to your torso and curl the bar up towards your shoulders. \
                      3. Squeeze your biceps at the top, then slowly lower the bar back to the starting position.",
    exerciseImage:
      "https://barbend.com/wp-content/uploads/2023/01/Barbend-Featured-Image-1200x675-A-closeup-of-a-person-doing-a-reverse-bicep-curl.jpg",
    video: "https://www.youtube.com/watch?v=hUA-fIpM7nA",
  },
];

const backExercises = [
  {
    name: "Pull-Up",
    muscleGroup: "Back",
    description:
      "1. Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart. \
                      2. Hang with your arms fully extended and legs crossed at the ankles. \
                      3. Pull your body up towards the bar until your chin is above the bar. \
                      4. Lower yourself back down with control.",
    exerciseImage:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528",
    video: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
  },
  {
    name: "Bent-Over Row",
    muscleGroup: "Back",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. \
                      2. Bend at your hips and knees, keeping your back flat and torso slightly above parallel to the floor. \
                      3. Pull the barbell towards your lower chest, squeezing your shoulder blades together. \
                      4. Lower the barbell back to the starting position.",
    exerciseImage:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/04/female-workout-bent-over-row-732-549-feature-thumb-732x549.jpg",
    video: "https://www.youtube.com/watch?v=6FZHJGzMFEc",
  },
  {
    name: "Lat Pulldown",
    muscleGroup: "Back",
    description:
      "1. Sit at a lat pulldown machine with your feet flat on the floor and knees secured under the pad. \
                      2. Grab the bar with a wide overhand grip. \
                      3. Pull the bar down towards your upper chest, squeezing your shoulder blades together. \
                      4. Slowly return the bar to the starting position.",
    exerciseImage:
      "https://www.trainheroic.com/wp-content/uploads/2023/03/AdobeStock_423445223-TH-jpg.webp",
    video: "https://www.youtube.com/watch?v=JGeRYIZdojU",
  },
  {
    name: "Seated Cable Row",
    muscleGroup: "Back",
    description:
      "1. Sit at a cable row machine with your feet on the footpads and knees slightly bent. \
                      2. Grab the handle with both hands and sit with your torso upright. \
                      3. Pull the handle towards your lower chest, squeezing your shoulder blades together. \
                      4. Slowly return the handle to the starting position.",
    exerciseImage:
      "https://sportpower.ir/wp-content/uploads/2023/06/2-min-12.jpg",
    video: "https://www.youtube.com/watch?v=UCXxvVItLoM",
  },
  {
    name: "T-Bar Row",
    muscleGroup: "Back",
    description:
      "1. Stand over a T-bar row machine with your feet shoulder-width apart. \
                      2. Bend at your hips and knees to grab the handles. \
                      3. Keep your back flat as you lift the handles towards your chest, squeezing your shoulder blades together. \
                      4. Lower the handles back down with control.",
    exerciseImage:
      "https://www.setforset.com/cdn/shop/articles/t_bar_row_2000x.jpg?v=1652354255",
    video: "https://www.youtube.com/watch?v=yPis7nlbqdY",
  },
  {
    name: "One-Arm Dumbbell Row",
    muscleGroup: "Back",
    description:
      "1. Place one knee and hand on a bench for support, holding a dumbbell in the opposite hand. \
                      2. Keep your back flat and torso parallel to the floor. \
                      3. Pull the dumbbell towards your lower chest, squeezing your shoulder blade. \
                      4. Lower the dumbbell back down. Repeat on the other side.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/zzFwwkQgCNMtmWQ7aQSxXe-320-80.jpg",
    video: "https://www.youtube.com/watch?v=DMo3HJoawrU",
  },
  {
    name: "Chin-Up",
    muscleGroup: "Back",
    description:
      "1. Grab a pull-up bar with an underhand grip, hands shoulder-width apart. \
                      2. Hang with your arms fully extended and legs crossed at the ankles. \
                      3. Pull your body up towards the bar until your chin is above the bar. \
                      4. Lower yourself back down with control.",
    exerciseImage:
      "https://www.trainics.se/wp-content/uploads/2020/12/Chin-Up-Good-vs-Bad-Form-1-1-1024x791.jpg",
    video: "https://www.youtube.com/watch?v=XgYtn5hWJgs",
  },
  {
    name: "Inverted Row",
    muscleGroup: "Back",
    description:
      "1. Lie underneath a bar set at waist height or lower. \
                      2. Grab the bar with an overhand grip, arms fully extended. \
                      3. Keep your body in a straight line as you pull your chest towards the bar. \
                      4. Lower yourself back down with control.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/10/1109-inverted-row0.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=KOaCM1HMwU0",
  },
  {
    name: "Back Extension",
    muscleGroup: "Back",
    description:
      "1. Position yourself on a back extension bench with your feet secured and hips over the pad. \
                      2. Cross your arms over your chest or place them behind your head. \
                      3. Lower your torso down until your body forms a 90-degree angle. \
                      4. Lift your torso back up to the starting position.",
    exerciseImage:
      "https://steelsupplements.com/cdn/shop/articles/shutterstock_1705063531_1000x.jpg?v=1642058677",
    video: "https://www.youtube.com/watch?v=ph3pddpKzzw",
  },
  {
    name: "Cable Pullover",
    muscleGroup: "Back",
    description:
      "1. Stand facing a cable machine with a high pulley and a straight bar attachment. \
                      2. Grab the bar with a wide overhand grip. \
                      3. Pull the bar down towards your thighs, keeping your arms straight. \
                      4. Return the bar to the starting position with control.",
    exerciseImage:
      "https://www.setforset.com/cdn/shop/articles/cable_pullover_2000x.jpg?v=1639635664",
    video: "https://www.youtube.com/watch?v=hKrPaheywB8",
  },
];
const chestExercises = [
  {
    name: "Barbell Bench Press",
    muscleGroup: "Chest",
    description:
      "1. Lie on a flat bench with your feet firmly on the ground and your eyes directly under the barbell. \
                    2. Grip the barbell slightly wider than shoulder-width apart. \
                    3. Lower the bar slowly to your chest, keeping your elbows at a 45-degree angle to your body. \
                    4. Press the bar back up until your arms are fully extended.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg",
    video: "https://www.youtube.com/watch?v=lWFknlOTbyM",
  },
  {
    name: "Incline Barbell Bench Press",
    muscleGroup: "Chest",
    description:
      "1. Set an adjustable bench to an incline of 30-45 degrees and lie back on it with a barbell racked above you. \
                    2. Grip the barbell slightly wider than shoulder-width apart. \
                    3. Lower the barbell to your upper chest, keeping your elbows at a 45-degree angle. \
                    4. Press the barbell back up until your arms are fully extended.",
    exerciseImage:
      "https://blogscdn.thehut.net/app/uploads/sites/444/2021/07/shutterstock_68880238opt_hero_1625232204.jpg",
    video: "https://www.youtube.com/watch?v=SrqOu55lrYU",
  },
  {
    name: "Dumbbell Bench Press",
    muscleGroup: "Chest",
    description:
      "1. Lie on a flat bench with a dumbbell in each hand, feet firmly on the ground. \
                    2. Hold the dumbbells above your chest with your palms facing forward. \
                    3. Lower the dumbbells to the sides of your chest, bending your elbows at a 45-degree angle. \
                    4. Press the dumbbells back up until your arms are fully extended.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/qiVuVgKaE84y8BGsHHAGf8.jpg",
    video: "https://www.youtube.com/watch?v=YQ2s_Y7g5Qk",
  },
  {
    name: "Incline Dumbbell Bench Press",
    muscleGroup: "Chest",
    description:
      "1. Set an adjustable bench to an incline of 30-45 degrees and lie back with a dumbbell in each hand. \
                    2. Hold the dumbbells above your chest with your palms facing forward. \
                    3. Lower the dumbbells to the sides of your upper chest, bending your elbows at a 45-degree angle. \
                    4. Press the dumbbells back up until your arms are fully extended.",
    exerciseImage:
      "https://blogscdn.thehut.net/app/uploads/sites/419/2021/12/shutterstock_263444231-min_1638521864-1_1639431705.jpeg",
    video: "https://www.youtube.com/watch?v=IP4oeKh1Sd4",
  },
  {
    name: "Dumbbell Fly",
    muscleGroup: "Chest",
    description:
      "1. Lie on a flat bench with a dumbbell in each hand, palms facing each other. \
                    2. Extend your arms above your chest, slightly bending your elbows. \
                    3. Lower the dumbbells in an arc motion until your arms are level with your chest. \
                    4. Raise the dumbbells back up to the starting position, keeping the arc motion.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2015/01/arnold-schwarzenegger-chest-workout.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=Nhvz9EzdJ4U",
  },
  {
    name: "Pec Deck",
    muscleGroup: "Chest",
    description:
      "1. Sit on the pec deck machine with your back against the pad. \
                  2. Place your arms at a 90-degree angle and grip the handles. \
                  3. Bring the handles together in front of your chest, squeezing your pectoral muscles. \
                  4. Slowly return to the starting position with control.",
    exerciseImage:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Male_Gym_Equipment_1296x728-header-1296x728.jpg?w=1155&h=1528",
    video: "https://www.youtube.com/watch?v=H4mVGHaK2f4",
  },
  {
    name: "Cable Crossover",
    muscleGroup: "Chest",
    description:
      "1. Stand in the center of a cable crossover machine with the pulleys set at the highest level. \
                  2. Hold a handle in each hand and step forward to create tension in the cables. \
                  3. With a slight bend in your elbows, bring your hands together in front of your chest. \
                  4. Slowly return to the starting position with control.",
    exerciseImage:
      "https://www.gymreapers.com/cdn/shop/articles/cable_crossovers.jpg?v=1687891380&width=2048",
      video: "https://www.youtube.com/watch?v=taI4XduLpTk",
  },

  {
    name: "Machine Chest Press",
    muscleGroup: "Chest",
    description:
      "1. Sit on the machine chest press with your feet flat on the floor. \
                  2. Grip the handles and press them forward until your arms are fully extended. \
                  3. Slowly return the handles to the starting position with control.",
    exerciseImage:
      "https://media.post.rvohealth.io/wp-content/uploads/2019/05/Male_Chest_Press_732x549-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=NwzUje3z0qY",
  },
  {
    name: "Machine Fly",
    muscleGroup: "Chest",
    description:
      "1. Sit on the machine fly with your back against the pad and your feet flat on the floor. \
                  2. Place your arms at a 90-degree angle and grip the handles. \
                  3. Bring the handles together in front of your chest, squeezing your pectoral muscles. \
                  4. Slowly return to the starting position with control.",
    exerciseImage:
      "https://www.bodybuilding.com/fun/images/2015/9-fly-variations-graphics-cellucore-2.jpg",
    video: "https://www.youtube.com/watch?v=eGjt4lk6g34",
  },
  {
    name: "Push Up",
    muscleGroup: "Chest",
    description:
      "1. Start in a high plank position with your hands placed slightly wider than shoulder-width apart. \
                  2. Keep your body in a straight line from head to heels. \
                  3. Lower your body until your chest nearly touches the ground. \
                  4. Push back up to the starting position, keeping your core tight.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/HSEB9o9JGUoKPiaMpXzHg8.jpg",
    video: "https://www.youtube.com/watch?v=-WXc4E-zcao",
  },
];
const tricepsExercises = [
  {
    name: "Tricep Dip",
    muscleGroup: "Triceps",
    description:
      "1. Place your hands on parallel bars or a dip station, arms fully extended. \
                      2. Lower your body by bending your elbows, keeping them close to your sides. \
                      3. Push back up to the starting position, fully extending your arms.",
    exerciseImage:
      "https://hips.hearstapps.com/hmg-prod/images/one-young-man-20-years-old-side-view-gym-indoors-royalty-free-image-1697629868.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*",
    video: "https://www.youtube.com/watch?v=6MwtkyNC2ZY",
  },
  {
    name: "Close-Grip Bench Press",
    muscleGroup: "Triceps",
    description:
      "1. Lie on a flat bench with your feet flat on the floor. \
                      2. Grab the barbell with a shoulder-width or closer grip. \
                      3. Lower the bar towards your chest, keeping your elbows close to your body. \
                      4. Press the bar back up to the starting position, fully extending your arms.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/1_155d781f-a698-40e7-bdb6-f0de019f9b89.jpg?v=1648738774",
    video: "https://www.youtube.com/watch?v=vEUyEOVn3yM",
  },
  {
    name: "Tricep Pushdown",
    muscleGroup: "Triceps",
    description:
      "1. Stand facing a cable machine with a high pulley and a straight bar attachment. \
                      2. Grab the bar with an overhand grip, elbows close to your torso. \
                      3. Push the bar down by extending your arms, keeping your elbows stationary. \
                      4. Return the bar to the starting position with control.",
    exerciseImage:
      "https://www.garagegymreviews.com/wp-content/uploads/woman-doing-cable-triceps-pushdown.jpg",
    video: "https://www.youtube.com/watch?v=6Fzep104f0s",
  },
  {
    name: "Skull Crusher",
    muscleGroup: "Triceps",
    description:
      "1. Lie on a flat bench with a barbell or EZ-bar. \
                      2. Extend your arms straight up, holding the bar with an overhand grip. \
                      3. Lower the bar towards your forehead by bending your elbows. \
                      4. Extend your arms back to the starting position.",
    exerciseImage:
      "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh16094-1544025589.png?crop=0.668xw:1.00xh;0.151xw,0&resize=1200:*",
    video: "https://www.youtube.com/watch?v=l3rHYPtMUo8",
  },
  {
    name: "Overhead Tricep Extension",
    muscleGroup: "Triceps",
    description:
      "1. Stand with a dumbbell or barbell overhead, arms fully extended. \
                      2. Lower the weight behind your head by bending your elbows. \
                      3. Extend your arms back to the starting position.",
    exerciseImage:
      "https://media.post.rvohealth.io/wp-content/uploads/2021/10/overhead-tricep-extension-dumbbell-732x549-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=rqjLV14AeiU",
  },
  {
    name: "Bench Dip",
    muscleGroup: "Triceps",
    description:
      "1. Sit on the edge of a bench with your hands next to your hips. \
                      2. Slide your hips off the bench and lower your body by bending your elbows. \
                      3. Push back up to the starting position, fully extending your arms.",
    exerciseImage:
      "https://steelsupplements.com/cdn/shop/articles/shutterstock_1526664821_1000x.jpg?v=1644523346",
    video: "https://www.youtube.com/watch?v=c3ZGl4pAwZ4",
  },
  {
    name: "Tricep Kickback",
    muscleGroup: "Triceps",
    description:
      "1. Stand with your feet hip-width apart, holding a dumbbell in each hand. \
                      2. Bend at your hips and knees, keeping your back flat. \
                      3. Extend your arms straight back, squeezing your triceps. \
                      4. Lower the dumbbells back to the starting position.",
    exerciseImage: "https://www.jefit.com/images/exercises/960_590/3112.jpg",
    video: "https://www.youtube.com/watch?v=6SS6K3lAwZ8",
  },
  {
    name: "Diamond Push-Up",
    muscleGroup: "Triceps",
    description:
      "1. Get into a push-up position with your hands close together, forming a diamond shape with your thumbs and index fingers. \
                      2. Lower your body by bending your elbows, keeping them close to your sides. \
                      3. Push back up to the starting position, fully extending your arms.",
    exerciseImage:
      "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/d11e56d9-0511-41d3-9af0-ffe2ecf22e14/what-muscles-do-diamond-push-ups-work%E2%80%94and-how-do-you-do-them.jpg",
    video: "https://www.youtube.com/watch?v=J0DnG1_S92I",
  },
  {
    name: "Dumbbell Tate Press",
    muscleGroup: "Triceps",
    description:
      "1. Lie on a flat bench with a dumbbell in each hand, arms extended straight up. \
                      2. Lower the dumbbells towards your chest by bending your elbows. \
                      3. Extend your arms back to the starting position.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/06/600-tate-press.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=9Lpwk3nLve8",
  },
  {
    name: "Bodyweight Skull Crusher",
    muscleGroup: "Triceps",
    description:
      "1. Set a bar at waist height or lower. \
                      2. Stand facing the bar and grab it with an overhand grip. \
                      3. Lower your body towards the bar by bending your elbows. \
                      4. Push back up to the starting position, fully extending your arms.",
    exerciseImage:
      "https://images.squarespace-cdn.com/content/v1/5f5e8592d2b0854b18af6975/1619972339111-ANM9PCB7GB47IT5BHZS3/Bodyweight%2BSkull%2BCrushers.jpg",
    video: "https://www.youtube.com/watch?v=BI6yw1w6wkk",
  },
];
const shoulderExercises = [
  {
    name: "Overhead Press",
    muscleGroup: "Shoulders",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell at shoulder height. \
                      2. Press the barbell overhead, fully extending your arms. \
                      3. Lower the barbell back to shoulder height with control.",
    exerciseImage:
      "https://images.ctfassets.net/8urtyqugdt2l/5yJyKuNvr395xYrIHf7Pk9/5afe6ee2d943ece433d9424ebae9ff50/barbell-press-how-to-exercise-female-tile.jpg",
    video: "https://www.youtube.com/watch?v=_RlRDWO2jfg",
  },
  {
    name: "Arnold Press",
    muscleGroup: "Shoulders",
    description:
      "1. Sit on a bench with a dumbbell in each hand, palms facing your body. \
                      2. Press the dumbbells overhead while rotating your palms to face forward. \
                      3. Lower the dumbbells back to the starting position, rotating your palms to face your body.",
    exerciseImage:
      "https://cdn.mos.cms.futurecdn.net/VrsQ5QwSQNEhdZqxeSnW4K.jpg",
    video: "https://www.youtube.com/watch?v=6Z15_WdXmVw",
  },
  {
    name: "Lateral Raise",
    muscleGroup: "Shoulders",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand. \
                      2. Raise the dumbbells out to the sides until your arms are parallel to the floor. \
                      3. Lower the dumbbells back to the starting position with control.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/Dumbbell_Lateral_Raise.jpg?v=1701860183",
    video: "https://www.youtube.com/watch?v=PzsMitRdI_8",
  },
  {
    name: "Front Raise",
    muscleGroup: "Shoulders",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand. \
                      2. Raise the dumbbells in front of you until your arms are parallel to the floor. \
                      3. Lower the dumbbells back to the starting position with control.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/1_4cd4953d-bb36-43b2-b137-0003b8e77955.jpg?v=1653303297",
    video: "https://www.youtube.com/watch?v=-t7fuZ0KhDA",
  },
  {
    name: "Rear Delt Fly",
    muscleGroup: "Shoulders",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand. \
                      2. Bend at your hips and knees, keeping your back flat and torso parallel to the floor. \
                      3. Lift the dumbbells out to the sides, squeezing your shoulder blades together. \
                      4. Lower the dumbbells back to the starting position.",
    exerciseImage:
      "https://welltech.com/wp-content/uploads/2023/04/Rear-Delt-Fly_cover.jpg",
    video: "https://www.youtube.com/watch?v=WPaVyXi03Rk",
  },
  {
    name: "Face Pull",
    muscleGroup: "Shoulders",
    description:
      "1. Attach a rope handle to a high pulley on a cable machine. \
                      2. Stand facing the machine and grab the handles with both hands. \
                      3. Pull the handles towards your face, keeping your elbows high. \
                      4. Squeeze your shoulder blades together, then return to the starting position.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/12/800-ropefacepull.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=0Po47vvj9g4",
  },
  {
    name: "Upright Row",
    muscleGroup: "Shoulders",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. \
                      2. Lift the barbell towards your chin, keeping your elbows higher than your wrists. \
                      3. Lower the barbell back to the starting position with control.",
    exerciseImage:
      "https://www.trainheroic.com/wp-content/uploads/2022/01/Upright-rows.jpg",
    video: "https://www.youtube.com/watch?v=um3VVzqunPU",
  },
  {
    name: "Cable Lateral Raise",
    muscleGroup: "Shoulders",
    description:
      "1. Stand next to a cable machine with a low pulley and a single handle attachment. \
                      2. Grab the handle with your outside hand. \
                      3. Raise your arm out to the side until it's parallel to the floor. \
                      4. Lower the handle back to the starting position with control.",
    exerciseImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXVJWR7X9KuVEq1ei8hl42JHpcs5rm9M2FA&s",
    video: "https://www.youtube.com/watch?v=lq7eLC30b9w",
  },
  {
    name: "Seated Dumbbell Press",
    muscleGroup: "Shoulders",
    description:
      "1. Sit on a bench with a dumbbell in each hand at shoulder height. \
                      2. Press the dumbbells overhead, fully extending your arms. \
                      3. Lower the dumbbells back to shoulder height with control.",
    exerciseImage:
      "https://bodybuilding-wizard.com/wp-content/uploads/2014/05/dumbbell-overhead-press.jpg",
    video: "https://www.youtube.com/watch?v=HzIiNhHhhtA",
  },
];
const upperLegsExercises = [
  // Legs
  {
    name: "Barbell Squat",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell across your upper back. \
                      2. Bend your knees and hips to lower your body as if sitting back into a chair. \
                      3. Keep your chest up and your back flat. \
                      4. Push through your heels to return to the starting position.",
    exerciseImage:
      "https://www.newbodyplan.co.uk/wp-content/uploads/2021/12/Squat-like-a-pro-burn-fat-leg-strength-muscle.jpg",
    video: "https://www.youtube.com/watch?v=rrJIyZGlK8c",
  },
  {
    name: "DB Lunge",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet hip-width apart, holding a dumbbell in each hand. \
                      2. Step forward with one leg, lowering your hips until both knees are bent at 90-degree angles. \
                      3. Push through your front heel to return to the starting position. \
                      4. Repeat on the other side.",
    exerciseImage: "https://barbend.com/wp-content/uploads/2017/08/lunge.png",
    video: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
  },
  {
    name: "Leg Press",
    muscleGroup: "Legs",
    description:
      "1. Sit on a leg press machine with your feet shoulder-width apart on the platform. \
                      2. Lower the platform by bending your knees to 90 degrees. \
                      3. Push the platform back up to the starting position by extending your legs.",
    exerciseImage:
      "https://cfuncannyfitness.com/wp-content/uploads/2018/01/leg-press-exercise.jpg",
    video: "https://www.youtube.com/watch?v=s9-zeWzPUmA",
  },
  {
    name: "Barbell Deadlift",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart, a barbell on the floor in front of you. \
                      2. Bend at your hips and knees to grab the bar with an overhand or mixed grip. \
                      3. Keep your back flat and chest up as you lift the bar by extending your hips and knees. \
                      4. Lower the bar back to the floor with control.",
    exerciseImage:
      "https://hips.hearstapps.com/hmg-prod/images/fit-young-african-american-woman-working-out-with-royalty-free-image-1634219544.jpg?crop=1.00xw:0.753xh;0,0.122xh&resize=1200:*",
    video: "https://www.youtube.com/watch?v=XxWcirHIwVo",
  },
  {
    name: "Leg Extension",
    muscleGroup: "Legs",
    description:
      "1. Sit on a leg extension machine with your feet under the padded bar. \
                      2. Extend your legs straight out, fully engaging your quadriceps. \
                      3. Lower the padded bar back to the starting position with control.",
    exerciseImage:
      "https://physiotutors.com/wp-content/uploads/2022/01/Seated-Leg-Extension-featured.webp",
    video: "https://www.youtube.com/watch?v=m0FOpMEgero",
  },
  {
    name: "Lying Leg Curl",
    muscleGroup: "Legs",
    description:
      "1. Lie face down on a leg curl machine with your ankles under the padded bar. \
                      2. Curl your legs towards your glutes, fully engaging your hamstrings. \
                      3. Lower the padded bar back to the starting position with control.",
    exerciseImage:
      "https://blogscdn.thehut.net/app/uploads/sites/449/2021/12/shutterstock_1471492208-1-ftt-min_1639667937.jpg",
    video: "https://www.youtube.com/watch?v=n5WDXD_mpVY",
  },
  {
    name: "Bulgarian Split Squat",
    muscleGroup: "Legs",
    description:
      "1. Stand in front of a bench with one foot resting on the bench behind you. \
                      2. Hold a dumbbell in each hand. \
                      3. Lower your body by bending your front knee until your thigh is parallel to the floor. \
                      4. Push through your front heel to return to the starting position.",
    exerciseImage:
      "https://images.ctfassets.net/8urtyqugdt2l/2s5tdGn6iABdoqEui2l2MN/d02a204930ba68ee6e4fd5981a71a44d/Bulgarian_Split_Squats.jpg",
    video: "https://www.youtube.com/watch?v=SkNsa3eBwLA",
  },
  {
    name: "Sumo Deadlift",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet wider than shoulder-width apart, toes pointing slightly out. \
                      2. Bend at your hips and knees to grab the barbell with an overhand or mixed grip. \
                      3. Keep your back flat and chest up as you lift the bar by extending your hips and knees. \
                      4. Lower the bar back to the floor with control.",
    exerciseImage:
      "https://hips.hearstapps.com/hmg-prod/images/fai-6801-1644335059.jpeg?resize=980:*",
    video: "https://www.youtube.com/watch?v=PQ3A_HmfQyk",
  },
  {
    name: "Goblet Squat",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell or kettlebell close to your chest. \
                      2. Bend your knees and hips to lower your body as if sitting back into a chair. \
                      3. Keep your chest up and your back flat. \
                      4. Push through your heels to return to the starting position.",
    exerciseImage:
      "https://hips.hearstapps.com/vidthumb/images/2019-menshealth-formcheck-ep11-tx-v6-patty-1553872483.jpg?crop=1.00xw:0.883xh;0,0.117xh&resize=1200:*",
    video: "https://www.youtube.com/watch?v=9W5KAqHfDe8",
  },

  {
    name: "DB Step-Up",
    muscleGroup: "Legs",
    description:
      "1. Stand in front of a bench or platform, holding a dumbbell in each hand. \
                      2. Step onto the bench with one foot, pressing through your heel to lift your body up. \
                      3. Step down with the same foot, then repeat with the other leg.",
    exerciseImage:
      "https://media.hearstapps.com/loop/1-1-237-1624956302.mp4/poster.jpg",
    video: "https://www.youtube.com/watch?v=9ZknEYboBOQ",
  },
  {
    name: "Hack Squat",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart. \
                      2. Bend your knees and hips to lower your body as if sitting back into a chair. \
                      3. Keep your chest up and your back flat. \
                      4. Push through your heels to return to the starting position.",
    exerciseImage:
      "https://breakingmuscle.com/wp-content/uploads/2022/09/hack-squat-bottom.jpg",
    video: "https://www.youtube.com/watch?v=0tn5K9NlCfo",
  },
  {
    name: "Hip Thrust",
    muscleGroup: "Legs",
    description:
      "1. Sit on the floor with your upper back against a bench, feet flat on the ground. \
                      2. Place a barbell or dumbbell across your hips. \
                      3. Push through your heels to lift your hips towards the ceiling, squeezing your glutes. \
                      4. Lower your hips back to the starting position with control.",
    exerciseImage:
      "https://www.verywellfit.com/thmb/ixEjQ33jGFFKqP7A5iCn1gyvL_Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hip-thrust-exercise--1199620482-e1e7b0f530a2477487fc0006e45fd7c9.jpg",
    video: "https://www.youtube.com/watch?v=xDmFkJxPzeM",
  },
  {
    name: "Pistol Squat",
    muscleGroup: "Legs",
    description:
      "1. Stand on one leg with your other leg extended straight in front of you. \
                      2. Lower your body by bending your standing leg, keeping your extended leg off the ground. \
                      3. Push through your heel to return to the starting position. Repeat on the other side.",
    exerciseImage:
      "https://media.self.com/photos/57d8843c50778cef321a440d/master/w_1600%2Cc_limit/how-to-pistol-squat-870.jpg",
    video: "https://www.youtube.com/watch?v=NTf8YRWfOHY",
  },
  {
    name: "Glute Bridge",
    muscleGroup: "Legs",
    description:
      "1. Lie on your back with your knees bent and feet flat on the ground. \
                      2. Lift your hips towards the ceiling, squeezing your glutes. \
                      3. Lower your hips back to the starting position with control.",
    exerciseImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-FRN412yqjRflIFaUONKGZbV_Oq7zkgyfw&s",
    video: "https://www.youtube.com/watch?v=cJWrTdRYNnw",
  },
  {
    name: "Good Morning",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart, holding a barbell across your upper back. \
                        2. Bend at your hips, keeping your back flat and knees slightly bent. \
                        3. Lower your torso until it's parallel to the floor. \
                        4. Return to the starting position by extending your hips.",
    exerciseImage:
      "https://images.ctfassets.net/8urtyqugdt2l/28AvVNTuNoZkOUJz6MBOvN/a002fb8afbf84fba2f26797fef35fe5c/tile-barbell-goodmorning.jpg",
    video: "https://www.youtube.com/watch?v=vKPGe8zb2S4",
  },
];
const calvesExercises = [
  // Calves
  {
    name: "DB Calf Raise",
    muscleGroup: "Legs",
    description:
      "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand. \
                      2. Raise your heels off the ground, standing on your toes. \
                      3. Lower your heels back to the starting position with control.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/02/6117_B.jpg?w=800&h=630&crop=1&quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=SRUtMJ0tE2A",
  },
  {
    name: "Seated Calf Raise",
    muscleGroup: "Calves",
    description:
      "1. Sit on a bench with your feet flat on the ground and a weight resting on your thighs. \
                    2. Place your toes on a raised platform or block, with your heels hanging off. \
                    3. Lift your heels as high as possible, squeezing your calves at the top. \
                    4. Slowly lower your heels back to the starting position.",
    exerciseImage:
      "https://www.dmoose.com/cdn/shop/articles/1_5a552186-2a78-4db2-8d35-08b08cc2065d.jpg?v=1647873709",
    video: "https://www.youtube.com/watch?v=3ZRe_QpvRPg",
  },
  {
    name: "Donkey Calf Raise",
    muscleGroup: "Calves",
    description:
      "1. Lean forward onto a support, such as a bench or a partner's back, with your feet on a raised platform. \
                    2. Keep your legs straight and your toes pointing forward. \
                    3. Lift your heels as high as possible, squeezing your calves at the top. \
                    4. Slowly lower your heels back to the starting position.",
    exerciseImage:
      "https://cdn.muscleandstrength.com/sites/default/files/donkey-calf-raise.jpg",
    video: "https://www.youtube.com/watch?v=r30EoMPSNns",
  },
  {
    name: "Calf Press on Leg Press Machine",
    muscleGroup: "Calves",
    description:
      "1. Sit on a leg press machine with your feet on the platform, toes pointing forward and your heels hanging off. \
                    2. Push the platform away by extending your legs fully. \
                    3. Lift your heels by extending your ankles, squeezing your calves at the top. \
                    4. Lower your heels back to the starting position with control.",
    exerciseImage:
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/06/600-leg-press-calf-raise.jpg?quality=86&strip=all",
    video: "https://www.youtube.com/watch?v=KxEYX_cuesM",
  },
  {
    name: "Single-Leg Calf Raise",
    muscleGroup: "Calves",
    description:
      "1. Stand on one leg with your other foot off the ground. \
                    2. Hold onto a support for balance if needed. \
                    3. Lift your heel as high as possible, squeezing your calf at the top. \
                    4. Slowly lower your heel back to the starting position. Repeat on the other leg.",
    exerciseImage:
      "https://d3p2750kqzf48b.cloudfront.net/wp-content/uploads/2015/12/07160058/Single-Leg-Calf-Raise.jpg",
    video: "https://www.youtube.com/watch?v=ORT4oJ_R8Qs",
  },
  {
    name: "Smith Machine Calf Raise",
    muscleGroup: "Calves",
    description:
      "1. Stand under the bar of a Smith machine with the bar resting across your shoulders. \
                    2. Position your toes on a raised platform with your heels hanging off. \
                    3. Lift your heels as high as possible, squeezing your calves at the top. \
                    4. Slowly lower your heels back to the starting position.",
    exerciseImage:
      "https://bodybuilding-wizard.com/wp-content/uploads/2014/04/smith-machine-standing-calf-raise-2-0.jpg",
    video: "https://www.youtube.com/watch?v=hh5516HCu4k",
  },
];
const allExercises = {
  all: [
    ...absExercises,
    ...bicepsExercises,
    ...backExercises,
    ...chestExercises,
    ...calvesExercises,
    ...shoulderExercises,
    ...tricepsExercises,
    ...upperLegsExercises,
  ],
  abs: absExercises,
  biceps: bicepsExercises,
  back: backExercises,
  chest: chestExercises,
  calves: calvesExercises,
  shoulders: shoulderExercises,
  triceps: tricepsExercises,
  legs: upperLegsExercises,
};

export default allExercises;
