import React, { PropTypes } from 'react';
import { Hero } from 'components/hero';
import { connect } from 'react-redux';
import { LandingReasons } from 'components/landing/reasons';
import { LandingStatistics } from 'components/landing/statistics';
import { ExpeditionGroupIcons } from 'components/expedition-group-icons';
import { FatFooter } from 'components/fat-footer';
import { Contributors } from 'components/contributors';


const Landing = ({ project, activeWorkflows }) =>
  <div className="landing">
    <Hero title="Notes from Nature" subtitle="Transcribe Museum Records" />
    <ExpeditionGroupIcons
      workflows={activeWorkflows}
      link="active-expeditions"
      text="Choose a Group and Start transcribing!"
    />
    <LandingStatistics project={project} activeWorkflows={activeWorkflows} />
    <LandingReasons />
    <Contributors />
    <FatFooter />
  </div>;

Landing.propTypes = {
  project: PropTypes.object,
  activeWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.project.project,
    activeWorkflows: state.workflows.activeWorkflows,
  };
}

export default connect(mapStateToProps)(Landing);
