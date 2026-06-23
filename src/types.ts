export interface Course {
  id: string;
  title: string;
  description: string;
  duration?: string;
  level?: string;
  iconName: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string; // e.g. "Parent of Student Amina", "Adult Student"
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface EnrollmentForm {
  fullName: string;
  email: string;
  phone: string;
  preferredCourse: string;
  preferredTeacher: 'male' | 'female' | 'any';
  studentAgeGroup: 'kids' | 'adults';
  classTiming: string;
  notes: string;
}
