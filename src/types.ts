/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  category: 'Partnership' | 'Investment' | 'Advisory' | 'Collaboration' | 'Speaking' | 'General';
  message: string;
  timestamp: string;
  status: 'unread' | 'read' | 'replied';
}

export interface CollaborationOption {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic map Lucide icons
}

export interface ExperienceSector {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  role: string;
  iconName: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  description: string;
}
