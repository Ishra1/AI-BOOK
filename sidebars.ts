import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1: Foundation and Sensing',
      link: {type: 'doc', id: 'chapters/chapter-1-foundation-and-sensing'},
      items: [

        {
          type: 'category',
          label: 'Week 1: Foundations',
          link: {type: 'doc', id: 'week-1-foundations/intro-to-physical-ai'},
          items: [
            'week-1-foundations/intro-to-physical-ai',
            'week-1-foundations/history-of-robotics',
          ],
        },
        {
          type: 'category',
          label: 'Week 2: Sensing',
          link: {type: 'doc', id: 'week-2-sensing/sensors-and-perception'},
          items: [
            'week-2-sensing/sensors-and-perception',
            'week-2-sensing/computer-vision-basics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: ROS and Kinematics',
      link: {type: 'doc', id: 'chapters/chapter-2-ros-and-kinematics'},
      items: [

        {
          type: 'category',
          label: 'Week 3: ROS',
          link: {type: 'doc', id: 'week-3-ros/intro-to-ros2'},
          items: [
            'week-3-ros/intro-to-ros2',
            'week-3-ros/nodes-topics-services',
          ],
        },
        {
          type: 'category',
          label: 'Week 4: Kinematics',
          link: {type: 'doc', id: 'week-4-kinematics/forward-kinematics'},
          items: [
            'week-4-kinematics/forward-kinematics',
            'week-4-kinematics/inverse-kinematics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Simulation and Navigation',
      link: {type: 'doc', id: 'chapters/chapter-3-simulation-and-navigation'},
      items: [

        {
          type: 'category',
          label: 'Week 5: Simulation',
          link: {type: 'doc', id: 'week-5-simulation/intro-to-gazebo'},
          items: [
            'week-5-simulation/intro-to-gazebo',
            'week-5-simulation/urdf-and-xacro',
          ],
        },
        {
          type: 'category',
          label: 'Week 6: Navigation',
          link: {type: 'doc', id: 'week-6-navigation/slam-and-localization'},
          items: [
            'week-6-navigation/slam-and-localization',
            'week-6-navigation/path-planning',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Manipulation and Control',
      link: {type: 'doc', id: 'chapters/chapter-4-manipulation-and-control'},
      items: [

        {
          type: 'category',
          label: 'Week 8: Manipulation',
          link: {type: 'doc', id: 'week-8-manipulation/grasping-and-manipulation'},
          items: [
            'week-8-manipulation/grasping-and-manipulation',
            'week-8-manipulation/motion-planning-moveit',
          ],
        },
        {
          type: 'category',
          label: 'Week 9: Control',
          link: {type: 'doc', id: 'week-9-control/pid-control'},
          items: [
            'week-9-control/pid-control',
            'week-9-control/whole-body-control',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Humanoids',
      link: {type: 'doc', id: 'chapters/chapter-5-humanoids'},
      items: [

        {
          type: 'category',
          label: 'Week 10: Humanoids',
          link: {type: 'doc', id: 'week-10-humanoids/humanoid-robot-design'},
          items: [
            'week-10-humanoids/humanoid-robot-design',
            'week-10-humanoids/bipedal-locomotion',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Learning',
      link: {type: 'doc', id: 'chapters/chapter-6-learning'},
      items: [

        {
          type: 'category',
          label: 'Week 11: Learning',
          link: {type: 'doc', id: 'week-11-learning/reinforcement-learning'},
          items: [
            'week-11-learning/reinforcement-learning',
            'week-11-learning/imitation-learning',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 7: Robot Ethics and Safety',
      link: {type: 'doc', id: 'chapters/chapter-7-robot-ethics-and-safety'},
      items: [

        {
          type: 'category',
          label: 'Week 12: Ethics',
          link: {type: 'doc', id: 'week-12-ethics/robot-ethics-and-safety'},
          items: [
            'week-12-ethics/robot-ethics-and-safety',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 8: Projects',
      link: {type: 'doc', id: 'chapters/chapter-8-projects'},
      items: [

        {
          type: 'category',
          label: 'Week 7: Midterm',
          link: {type: 'doc', id: 'week-7-midterm/midterm-project'},
          items: [
            'week-7-midterm/midterm-project',
          ],
        },
        {
          type: 'category',
          label: 'Week 13: Final',
          link: {type: 'doc', id: 'week-13-final/final-project'},
          items: [
            'week-13-final/final-project',
          ],
        },
      ],
    },
    'hardware-requirements',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
