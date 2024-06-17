import { absExercises } from "./components/ExercisesPage/exercises";
import { bicepsExercises } from "./components/ExercisesPage/exercises";
import { backExercises } from "./components/ExercisesPage/exercises";
import { chestExercises } from "./components/ExercisesPage/exercises";
import { calvesExercises } from "./components/ExercisesPage/exercises";
import { shoulderExercises } from "./components/ExercisesPage/exercises";
import { tricepsExercises } from "./components/ExercisesPage/exercises";
import { upperLegsExercises } from "./components/ExercisesPage/exercises";

const programs = [
  {
    programImage: "/./program-images/hypertrophy-for-starters.webp",
    name: "Hypertrophy for Starters",
    id: "hypertrophy-for-starters",
    description:
      "Hypertrophy for Starters is an ideal program for beginners aiming to build muscle mass and improve overall body composition. With a focus on three days of training each week, this program offers a balanced approach with workouts targeting different muscle groups on each day. Whether it's Chest and Back on Day 1, Biceps and Triceps on Day 2, or Shoulders and Legs on Day 3, each session is designed to enhance muscular endurance and growth within a manageable 30-45 minutes timeframe.",
    difficulty: "Beginner",
    goal: "Bodybuilding",
    workoutsPerWeek: "3 Days",
    workoutDuration: "30-45 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Chest, Back, Abs" },
        { exercise: chestExercises[0], sets: 3, reps: 10, intensity: "RPE 8" },
        { exercise: backExercises[0], sets: 3, reps: 10, intensity: "RPE 8" },
        { exercise: absExercises[0], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
      day2: [
        { name: "Day 2 - Biceps, Triceps, Calves" },
        { exercise: bicepsExercises[0], sets: 3, reps: 12, intensity: "RPE 8" },
        {
          exercise: tricepsExercises[0],
          sets: 3,
          reps: 12,
          intensity: "RPE 8",
        },
        { exercise: calvesExercises[0], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
      day3: [
        { name: "Day 3 - Shoulders, Legs, Abs" },
        {
          exercise: shoulderExercises[0],
          sets: 3,
          reps: 10,
          intensity: "RPE 8",
        },
        {
          exercise: upperLegsExercises[0],
          sets: 3,
          reps: 12,
          intensity: "RPE 8",
        },
        { exercise: absExercises[1], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
    },
  },
  {
    programImage: "/./program-images/big-3-for-novices.jpg",
    name: "Big 3 for Novices",
    id: "big-3-for-novices",
    description:
      "Tailored for novice lifters, Big 3 for Novices focuses on mastering the essential compound lifts: the squat, bench press, and deadlift. This four-day weekly regimen is crafted to boost strength and proficiency in powerlifting basics. Each full-body workout spans 45-60 minutes, ensuring balanced development across all major muscle groups. The program gradually increases the intensity and complexity of exercises, laying a solid foundation for future strength training endeavors.",
    difficulty: "Novice",
    goal: "Powerlifting",
    workoutsPerWeek: "4 Days",
    workoutDuration: "45-60 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Full Body" },
        { exercise: chestExercises[0], sets: 3, reps: 5, intensity: "RPE 8" },
        { exercise: backExercises[0], sets: 3, reps: 5, intensity: "RPE 8" },
        {
          exercise: upperLegsExercises[0],
          sets: 3,
          reps: 5,
          intensity: "RPE 8",
        },
      ],
      day2: [
        { name: "Day 2 - Full Body" },
        {
          exercise: upperLegsExercises[2],
          sets: 3,
          reps: 12,
          intensity: "RPE 8",
        },
        {
          exercise: tricepsExercises[0],
          sets: 3,
          reps: 12,
          intensity: "RPE 8",
        },
        { exercise: absExercises[0], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
      day3: [
        { name: "Day 3 - Full Body" },
        { exercise: chestExercises[1], sets: 3, reps: 8, intensity: "RPE 8" },
        { exercise: backExercises[1], sets: 3, reps: 8, intensity: "RPE 8" },
        {
          exercise: upperLegsExercises[1],
          sets: 3,
          reps: 8,
          intensity: "RPE 8",
        },
      ],
      day4: [
        { name: "Day 4 - Full Body" },
        {
          exercise: upperLegsExercises[0],
          sets: 3,
          reps: 6,
          intensity: "RPE 8",
        },
        {
          exercise: tricepsExercises[0],
          sets: 3,
          reps: 15,
          intensity: "RPE 8",
        },
        { exercise: absExercises[3], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
    },
  },
  {
    programImage: "/./program-images/peak-performance.jpg",
    name: "Peak Performance",
    id: "peak-performance",
    description:
      "Designed for those at an intermediate level, Peak Performance merges the best of bodybuilding and powerlifting. This five-day-per-week routine pushes your limits with over 60 minutes of intense workouts each session. From heavy compound lifts on chest and back days to high-rep training for arms and abs, this program ensures both strength and hypertrophy. It’s perfect for those looking to increase their lifting capacity while sculpting a powerful physique.",
    difficulty: "Intermediate",
    goal: "Powerbuilding",
    workoutsPerWeek: "5 Days",
    workoutDuration: "> 60 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Chest & Back" },
        { exercise: chestExercises[1], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[1], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: chestExercises[2], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[2], sets: 3, reps: 6, intensity: "RPE 9" },
      ],
      day2: [
        { name: "Day 2 - Arms & Abs" },
        {
          exercise: bicepsExercises[1],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[1],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: bicepsExercises[2],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[2],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[2], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day3: [
        { name: "Day 3 - Chest & Back" },
        { exercise: chestExercises[3], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[3], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: chestExercises[4], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[4], sets: 3, reps: 10, intensity: "RPE 9" },
      ],
      day4: [
        { name: "Day 4 - Arms & Abs" },
        {
          exercise: bicepsExercises[3],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[3],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: bicepsExercises[4],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[4],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[4], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day5: [
        { name: "Day 5 - Shoulders, Legs & Abs" },
        {
          exercise: shoulderExercises[1],
          sets: 3,
          reps: 6,
          intensity: "RPE 9",
        },
        {
          exercise: shoulderExercises[2],
          sets: 3,
          reps: 10,
          intensity: "RPE 9",
        },
        {
          exercise: upperLegsExercises[3],
          sets: 3,
          reps: 15,
          intensity: "RPE 9",
        },
        {
          exercise: calvesExercises[4],
          sets: 3,
          reps: 20,
          intensity: "RPE 9",
        },
        { exercise: absExercises[0], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
    },
  },
  {
    programImage: "/./program-images/everyday-athlete.jpg",
    name: "Everyday Athlete",
    id: "everyday-athlete",
    difficulty: "Advanced",
    description:
      "Everyday Athlete caters to advanced fitness enthusiasts who prefer bodyweight exercises. This program, spread over two days a week, concentrates on full-body workouts that enhance functional strength and agility. Each session, lasting 30-45 minutes, includes a mix of push-ups, pull-ups, core work, and leg exercises. It’s perfect for those who seek to maintain peak athletic performance without the need for heavy weights or gym equipment.",
    goal: "Bodyweight Fitness",
    workoutsPerWeek: "2 Days",
    workoutDuration: "30-45 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Full Body" },
        { exercise: chestExercises[9], sets: 3, reps: 8, intensity: "RPE 9" },
        { exercise: backExercises[0], sets: 3, reps: 8, intensity: "RPE 9" },
        { exercise: absExercises[4], sets: 3, reps: 8, intensity: "RPE 9" },
        {
          exercise: upperLegsExercises[6],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        { exercise: calvesExercises[4], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day2: [
        { name: "Day 2 - Full Body" },
        { exercise: chestExercises[9], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[0], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: absExercises[5], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: tricepsExercises[5], sets: 3, reps: 8, intensity: "RPE 9" },
        {
          exercise: upperLegsExercises[6],
          sets: 3,
          reps: 15,
          intensity: "RPE 9",
        },
      ],
    },
  },
  {
    programImage: "/./program-images/foundation-fitness.webp",
    name: "Foundation Fitness",
    id: "foundation-fitness",
    description:
      "Foundation Fitness is the ultimate beginner’s guide to bodybuilding. With just two 30-minute sessions each week, this program offers an accessible entry point into strength training. Each full-body workout emphasizes essential movements that promote muscle growth and strength. It’s designed to fit easily into any schedule, making it perfect for those new to fitness or looking to build a strong foundation without a significant time commitment.",
    difficulty: "Beginner",
    goal: "Bodybuilding",
    workoutsPerWeek: "2 Days",
    workoutDuration: "< 30 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Full Body" },
        { exercise: chestExercises[4], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[4], sets: 3, reps: 8, intensity: "RPE 9" },
        {
          exercise: upperLegsExercises[5],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        { exercise: absExercises[7], sets: 3, reps: 8, intensity: "RPE 9" },
        { exercise: calvesExercises[5], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day2: [
        { name: "Day 2 - Full Body" },
        { exercise: chestExercises[5], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[5], sets: 3, reps: 12, intensity: "RPE 9" },
        {
          exercise: upperLegsExercises[5],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        { exercise: bicepsExercises[5], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: tricepsExercises[5], sets: 3, reps: 8, intensity: "RPE 9" },
      ],
    },
  },
  {
    programImage: "/./program-images/big-lifts-blitz.webp",
    name: "Big Lifts Blitz",
    id: "big-lifts-blitz",
    description:
      "Big Lifts Blitz is crafted for novice lifters eager to delve into the world of powerlifting. This three-day-a-week program centers around building strength with fundamental lifts like squats, bench presses, and deadlifts. Each session, lasting 45-60 minutes, focuses on full-body engagement and progressive overload. It's ideal for those looking to increase their lifting proficiency and build a solid powerlifting foundation.",
    difficulty: "Novice",
    goal: "Powerlifting",
    workoutsPerWeek: "3 Days",
    workoutDuration: "45-60 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Full Body" },
        {
          exercise: upperLegsExercises[11],
          sets: 3,
          reps: 6,
          intensity: "RPE 8",
        },
        { exercise: chestExercises[0], sets: 3, reps: 6, intensity: "RPE 8" },
        { exercise: backExercises[5], sets: 3, reps: 6, intensity: "RPE 8" },
      ],
      day2: [
        { name: "Day 2 - Full Body" },
        {
          exercise: upperLegsExercises[0],
          sets: 3,
          reps: 4,
          intensity: "RPE 8",
        },
        { exercise: bicepsExercises[3], sets: 3, reps: 4, intensity: "RPE 8" },
        {
          exercise: tricepsExercises[3],
          sets: 3,
          reps: 4,
          intensity: "RPE 8",
        },
        { exercise: calvesExercises[5], sets: 3, reps: 4, intensity: "RPE 8" },
      ],
      day3: [
        { name: "Day 3 - Full Body" },
        {
          exercise: upperLegsExercises[3],
          sets: 3,
          reps: 8,
          intensity: "RPE 8",
        },
        {
          exercise: shoulderExercises[7],
          sets: 3,
          reps: 8,
          intensity: "RPE 8",
        },
        {
          exercise: upperLegsExercises[14],
          sets: 3,
          reps: 12,
          intensity: "RPE 8",
        },
        { exercise: absExercises[7], sets: 3, reps: 15, intensity: "RPE 8" },
      ],
    },
  },
  {
    programImage: "/./program-images/power-physique.webp",
    name: "Power Physique",
    id: "power-physique",
    description:
      " For those aiming to combine strength with muscle size, Power Physique offers a comprehensive solution. This four-day weekly program extends over 60 minutes per session and integrates heavy lifting with high-volume training. Focus days are divided between upper and lower body, with particular emphasis on the chest, back, arms, and shoulders. It’s perfect for intermediate lifters seeking to enhance both their power and physique.",
    difficulty: "Intermediate",
    goal: "Bodybuilding",
    workoutsPerWeek: "4 Days",
    workoutDuration: "> 60 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Chest & Back" },
        { exercise: chestExercises[5], sets: 2, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[5], sets: 2, reps: 6, intensity: "RPE 9" },
        { exercise: chestExercises[6], sets: 3, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[6], sets: 3, reps: 6, intensity: "RPE 9" },
      ],
      day2: [
        { name: "Day 2 - Arms, Shoulders & Abs" },
        {
          exercise: bicepsExercises[5],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[5],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: shoulderExercises[6],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[6],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[6], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day3: [
        { name: "Day 3 - Chest & Back" },
        { exercise: chestExercises[7], sets: 2, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[7], sets: 2, reps: 10, intensity: "RPE 9" },
        { exercise: chestExercises[8], sets: 3, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[8], sets: 3, reps: 10, intensity: "RPE 9" },
      ],
      day4: [
        { name: "Day 4 - Arms, Shoulders & Abs" },
        {
          exercise: bicepsExercises[6],
          sets: 2,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[6],
          sets: 2,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: bicepsExercises[7],
          sets: 3,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: shoulderExercises[7],
          sets: 3,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[2], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
    },
  },
  {
    programImage: "/./program-images/advanced-conditioning.jpg",
    name: "Advanced Conditioning",
    id: "advanced-conditioning",
    description:
      "Advanced Conditioning challenges the seasoned fitness enthusiast with intense, bodyweight-focused workouts. This program schedules four days of 30-45 minute sessions each week, designed to push your limits with high-rep, high-intensity training. Full-body and upper body days are meticulously planned to maximize strength, endurance, and muscle tone. It's perfect for those looking to achieve peak physical condition using minimal equipment.",
    difficulty: "Advanced",
    goal: "Bodyweight Fitness",
    workoutsPerWeek: "4 Days",
    workoutDuration: "30-45 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Full Body" },
        { exercise: chestExercises[9], sets: 4, reps: 8, intensity: "RPE 10" },
        { exercise: backExercises[0], sets: 4, reps: 8, intensity: "RPE 10" },
        { exercise: absExercises[4], sets: 4, reps: 8, intensity: "RPE 10" },
        {
          exercise: upperLegsExercises[6],
          sets: 4,
          reps: 8,
          intensity: "RPE 10",
        },
      ],
      day2: [
        { name: "Day 2 - Full Body" },
        { exercise: chestExercises[9], sets: 4, reps: 6, intensity: "RPE 10" },
        { exercise: backExercises[0], sets: 3, reps: 6, intensity: "RPE 10" },
        { exercise: absExercises[5], sets: 3, reps: 6, intensity: "RPE 10" },
        {
          exercise: tricepsExercises[5],
          sets: 4,
          reps: 8,
          intensity: "RPE 10",
        },
        { exercise: absExercises[6], sets: 3, reps: 15, intensity: "RPE 10" },
        {
          exercise: calvesExercises[4],
          sets: 3,
          reps: 15,
          intensity: "RPE 10",
        },
      ],
      day3: [
        { name: "Day 3 - Upper Body" },
        { exercise: chestExercises[9], sets: 3, reps: 6, intensity: "RPE 10" },
        { exercise: backExercises[0], sets: 5, reps: 5, intensity: "RPE 10" },
        { exercise: absExercises[6], sets: 3, reps: 6, intensity: "RPE 10" },
        {
          exercise: tricepsExercises[0],
          sets: 3,
          reps: 8,
          intensity: "RPE 10",
        },
      ],
      day4: [
        { name: "Day 4 - Full Body" },
        { exercise: chestExercises[9], sets: 3, reps: 6, intensity: "RPE 10" },
        { exercise: backExercises[0], sets: 5, reps: 8, intensity: "RPE 10" },
        {
          exercise: upperLegsExercises[9],
          sets: 3,
          reps: 6,
          intensity: "RPE 10",
        },
        { exercise: absExercises[4], sets: 3, reps: 15, intensity: "RPE 10" },
      ],
    },
  },
  {
    programImage: "/./program-images/strength-surge.jpg",
    name: "Strength Surge",
    id: "strength-surge",
    description:
      "Strength Surge is an ambitious program for novices eager to rapidly increase both their strength and muscle mass. Featuring six days of workouts per week, each 45-60 minute session alternates between focusing on major muscle groups like the chest, back, arms, shoulders, and legs. This intensive schedule promotes rapid gains and is perfect for dedicated individuals ready to commit to a rigorous training regimen aimed at power and physique development.",
    difficulty: "Novice",
    goal: "Powerbuilding",
    workoutsPerWeek: "6 Days",
    workoutDuration: "45-60 Minutes",
    programStructure: {
      day1: [
        { name: "Day 1 - Chest & Back" },
        { exercise: chestExercises[7], sets: 2, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[7], sets: 2, reps: 6, intensity: "RPE 9" },
        { exercise: chestExercises[8], sets: 2, reps: 6, intensity: "RPE 9" },
        { exercise: backExercises[8], sets: 2, reps: 6, intensity: "RPE 9" },
      ],
      day2: [
        { name: "Day 2 - Arms & Abs" },
        {
          exercise: bicepsExercises[8],
          sets: 2,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[8],
          sets: 2,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: bicepsExercises[9],
          sets: 2,
          reps: 12,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[9],
          sets: 2,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[8], sets: 2, reps: 15, intensity: "RPE 9" },
      ],
      day3: [
        { name: "Day 3 - Shoulders & Legs" },
        {
          exercise: shoulderExercises[7],
          sets: 2,
          reps: 6,
          intensity: "RPE 9",
        },
        {
          exercise: shoulderExercises[6],
          sets: 2,
          reps: 10,
          intensity: "RPE 9",
        },
        {
          exercise: upperLegsExercises[10],
          sets: 2,
          reps: 15,
          intensity: "RPE 9",
        },
        {
          exercise: calvesExercises[4],
          sets: 2,
          reps: 20,
          intensity: "RPE 9",
        },
      ],
      day4: [
        { name: "Day 4 - Chest & Back" },
        { exercise: chestExercises[6], sets: 2, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[4], sets: 2, reps: 10, intensity: "RPE 9" },
        { exercise: chestExercises[7], sets: 2, reps: 10, intensity: "RPE 9" },
        { exercise: backExercises[5], sets: 2, reps: 10, intensity: "RPE 9" },
      ],
      day5: [
        { name: "Day 5 - Arms & Abs" },
        {
          exercise: bicepsExercises[6],
          sets: 2,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[4],
          sets: 2,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: bicepsExercises[5],
          sets: 2,
          reps: 8,
          intensity: "RPE 9",
        },
        {
          exercise: tricepsExercises[3],
          sets: 2,
          reps: 12,
          intensity: "RPE 9",
        },
        { exercise: absExercises[9], sets: 3, reps: 15, intensity: "RPE 9" },
      ],
      day6: [
        { name: "Day 6 - Shoulders & Legs" },
        {
          exercise: shoulderExercises[8],
          sets: 2,
          reps: 6,
          intensity: "RPE 9",
        },
        {
          exercise: shoulderExercises[4],
          sets: 2,
          reps: 10,
          intensity: "RPE 9",
        },
        {
          exercise: calvesExercises[3],
          sets: 2,
          reps: 15,
          intensity: "RPE 9",
        },
        {
          exercise: upperLegsExercises[8],
          sets: 2,
          reps: 15,
          intensity: "RPE 9",
        },
      ],
    },
  },
];

export default programs;
