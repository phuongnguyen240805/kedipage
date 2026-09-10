'use client';

import React from 'react';
import AgencyCardPropsSection from '../agency-card-props';
import BlogPost from './blog-card-data';

const AgencyPage = () => {
  return (
    <div className="min-h-screen ">
      <AgencyCardPropsSection title="Bài viết nổi bật" posts={BlogPost} />
    </div>
  );
};

export default AgencyPage;
