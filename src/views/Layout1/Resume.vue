<script setup>
import { useAppStore } from '@/stores/app';
import {useLayout1Store} from '@/stores/layout1.js';
import Section from '@/components/resume/Section.vue';

const layout = useLayout1Store();
const app = useAppStore();

const transformDateMY = (date) => {
  if (date !== '') {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    month = month.toString().padStart(2, '0');
    return `${month}/${year}`;
  }
}

</script>

<template>
  <div id="resume1">
    <div class="resume-wrapper">

      <!-- BEGIN HEAD -->
      <div class="row1 head">
        <!-- BEGIN HEAD LEFT -->
        <div class="col1">
          <Transition name="slide-fade">
            <h1 v-if="layout.head.content[0].name !== ''">{{ layout.head.content[0].name }}</h1>
          </Transition>
        </div>
        <!-- END HEAD LEFT -->

        <!-- BEGIN HEAD RIGHT -->
        <div class="col2">
          <img v-if="layout.head.content[0].position !== ''" class="logo" src="@/assets/icons/atdev-logo.png" alt="ATDEV Logo">
          <Transition name="slide-fade">
            <h2 v-if="layout.head.content[0].position !== ''">{{ layout.head.content[0].position }}</h2>
          </Transition>
        </div>
        <!-- END  HEAD RIGHT -->

        <!-- BEGIN BORDER BOTTOM -->
        <div v-show="layout.head.content[0].name !== ''" class="border-bottom">
          <div class="border-1"></div>
          <div class="border-2"></div>
        </div>
        <!-- END BORDER BOTTOM -->
      </div>
      <!-- END HEAD -->

      <!-- BEGIN PROFILE INFO -->
      <div class="row2 profile-info">
        <Section :icon="layout.profileInfo.icon" :title="layout.profileInfo.i18n.Title[app.locale]">
          <template #body>
            <Transition name="slide-fade">
              <p v-if="layout.profileInfo.content[0].profileInfo !== ''" v-html="layout.profileInfo.content[0].profileInfo"></p>
            </Transition>
          </template>
        </Section>
      </div>
      <!-- END PROFILE INFO -->

      <!-- BEGIN GROUPS -->
      <div class="row3">
        <!-- BEGIN LEFT GROUP -->
        <div class="left-group">

          <!-- BEGIN JOB EXPERIENCE -->
          <Section class="job-experience" :icon="layout.jobExperience.icon" :title="layout.jobExperience.i18n.Title[app.locale]" >
            <template #body>
              <div class="experience" v-for="experience, index in layout.jobExperience.content" :key="index">
                <div class="row1">
                  <Transition name="slide-fade">
                    <h4 v-show="experience.position !== ''">
                      <Transition name="slide-fade">
                        <strong>{{experience.position}}</strong>
                      </Transition>

                      <Transition name="slide-fade">
                        <b v-if="experience.employer !=''"> | </b> 
                      </Transition>

                      <Transition name="slide-fade">
                        <strong>{{experience.employer}}</strong>
                      </Transition>

                      <Transition name="slide-fade">
                        <b v-if="experience.city !==''">, </b> 
                      </Transition>

                      <Transition name="slide-fade">
                        <span class="reduce-size">{{experience.city}}</span>
                      </Transition>

                      <Transition name="slide-fade">
                        <b v-if="experience.country !==''">, </b> 
                      </Transition>

                      <Transition name="slide-fade">
                        <span class="reduce-size"> {{experience.country}} </span> 
                      </Transition>

                      <Transition name="slide-fade">
                        <b v-if="experience.isRemote"> | </b> 
                      </Transition>

                      <Transition name="slide-fade">
                        <span class="reduce-size" v-if="experience.isRemote">{{layout.jobExperience.i18n.Remote.label[app.locale]}}</span> 
                      </Transition>
                    </h4>
                  </Transition>
                </div>

                <div class="row2">
                  <Transition name="slide-fade"> <p class="reduce-size" v-if="experience.startDate !== ''"> {{transformDateMY(experience.startDate)}} </p> </Transition>
                  <Transition name="slide-fade"> <span class="reduce-size" v-if="experience.isWorking">-</span> <span class="reduce-size" v-else-if="experience.finishDate !==''">-</span> </Transition>
                  <Transition name="slide-fade"> <p class="reduce-size" v-if="experience.isWorking">{{layout.jobExperience.i18n.DateWorking[app.locale]}}</p> <p class="reduce-size" v-else>{{transformDateMY(experience.finishDate)}}</p> </Transition>
                </div>

                <div class="row3">
                  <Transition name="slide-fade"> <p v-if="experience.description !== ''" v-html="experience.description"></p> </Transition>
                </div>

                <ol class="row4">
                  <li v-for="task, index in experience.tasks" :key="index">
                    <Transition name="slide-fade">
                      <p v-if="task.task !== ''" v-html="task.task"></p>
                    </Transition>
                  </li>
                </ol>
              </div>
            </template>
          </Section>
          <!-- END JOB EXPERIENCE -->

          <!-- BEGIN PERSONAL PROJECTS -->
          <Section class="personal-projects" :icon="layout.personalProjects.icon" :title="layout.personalProjects.i18n.Title[app.locale]" >
            <template #body>
              <div class="project" v-for="project, index in layout.personalProjects.content" :key="index">
                <Transition name="slide-fade">
                  <h4 v-show="project.title !== ''">{{project.title}}</h4>
                </Transition>
                <Transition name="slide-fade">
                  <p v-show="project.description" v-html="project.description"></p>
                </Transition>
                <div class="links">
                  <Transition name="slide-fade">
                    <a v-if="project.repositoryLink !== ''" href="{{ project.repositoryLink }}" target="_blank">{{layout.personalProjects.i18n.Repository.link.label[app.locale]}}</a>
                  </Transition>
                  <Transition name="slide-fade">
                    <a v-if="project.websiteLink !== ''" href="{{ project.websiteLink }}" target="_blank">{{layout.personalProjects.i18n.Website.link.label[app.locale]}}</a>
                  </Transition>
                </div>
              </div>
            </template>
          </Section>
          <!-- END PERSONAL PROJECTS -->

        </div>
        <!-- END LEFT GROUP -->

        <!-- BEGIN RIGHT GROUP -->
        <div class="right-group">
          <!-- BEGIN EDUCATION HISTORY -->
          <Section class="education-history" :icon="layout.educationHistory.icon" :title="layout.educationHistory.i18n.Title[app.locale]" >
            <template #body>
              <ol class="bullet-point">
                <li v-for="education, index in layout.educationHistory.content" :key="index">
                  <div class="bullet">
                    <Transition name="slide-fade">
                      <svg v-if="education.title !== ''" aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <circle stroke="none" cx="16" cy="16" r="10"></circle>
                      </svg>
                    </Transition>
                  </div>
                  <div class="body">
                    <div class="row1">
                      <Transition name="slide-fade">
                        <h4 v-if="education.title !== ''">{{ education.title }}</h4>
                      </Transition>
                    </div>
                    
                    <div class="row2">
                      <Transition name="slide-fade">
                        <p v-if="education.startDate !== ''" class="reduce-size"> {{transformDateMY(education.startDate)}} </p> 
                      </Transition>

                      <Transition name="slide-fade">
                        <span v-if="education.finishDate !== ''" class="reduce-size">-</span> 
                      </Transition>

                      <Transition name="slide-fade">
                        <p v-if="education.finishDate !== ''" class="reduce-size">{{transformDateMY(education.finishDate)}}</p>
                      </Transition>
                    </div>

                    <div class="row3">
                      <Transition name="slide-fade">
                        <p v-if="education.institute !== ''">{{ education.institute }}</p>
                      </Transition>
                    </div>
                  </div>
                </li>
              </ol>
            </template>
          </Section>
          <!-- END EDUCATION HISTORY -->

          <!-- BEGIN TECHNICAL SKILLS -->
          <Section class="technical-skills" :icon="layout.technicalSkills.icon" :title="layout.technicalSkills.i18n.Title[app.locale]" >
            <template #body>
              <ol class="bullet-point">
                <li v-for="skill, index in layout.technicalSkills.content" :key="index">
                  <div class="bullet">
                    <Transition name="slide-fade">
                      <svg v-if="skill.skill !== ''" aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <circle stroke="none" cx="16" cy="16" r="10"></circle>
                      </svg>
                    </Transition>
                  </div>
                  <div class="body">
                    <Transition name="slide-fade">
                      <h4>{{ skill.skill }}
                        <Transition name="slide-fade">
                          <span>:</span> 
                        </Transition>

                        <Transition name="slide-fade">
                          <span class="detail">{{ skill.detail }}</span>
                        </Transition>
                      </h4>
                    </Transition>
                  </div>
                </li>
              </ol>
            </template>
          </Section>
          <!-- END TECHNICAL SKILLS -->

          <!-- BEGIN PERSONAL SKILLS -->
          <Section class="personal-skills" :icon="layout.personalSkills.icon" :title="layout.personalSkills.i18n.Title[app.locale]" >
            <template #body>
              <ol class="bullet-point">
                <li v-for="skill, index in layout.personalSkills.content" :key="index">
                  <div class="bullet">
                    <Transition name="slide-fade">
                      <svg v-if="skill.skill !== ''" aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <circle stroke="none" cx="16" cy="16" r="10"></circle>
                      </svg>
                    </Transition>
                  </div>
                  <div>
                    <Transition name="slide-fade">
                      <h4 v-if="skill.skill !== ''">{{ skill.skill }}</h4>
                    </Transition>
                  </div>
                </li>
              </ol>
            </template>
          </Section>
          <!-- END PERSONAL SKILLS -->

          <!-- BEGIN CERTIFICATIONS -->
          <Section class="certifications" :icon="layout.certifications.icon" :title="layout.certifications.i18n.Title[app.locale]" >
            <template #body>
              <ol class="bullet-point">
                <li v-for="certification, index in layout.certifications.content" :key="index">
                  <div class="bullet">
                    <Transition name="slide-fade">
                      <svg v-if="certification.certification !== ''" aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <circle stroke="none" cx="16" cy="16" r="10"></circle>
                      </svg>
                    </Transition>
                  </div>
                  <div>
                    <Transition v-if="certification.certification !== ''" name="slide-fade">
                      <h4>{{ certification.certification }}</h4>
                    </Transition>
                  </div>
                </li>
              </ol>
            </template>
          </Section>
          <!-- END CERTIFICATIONS -->

          <!-- BEGIN HOBBIES -->
          <Section class="hobbies" :icon="layout.hobbies.icon" :title="layout.hobbies.i18n.Title[app.locale]" >
            <template #body>
              <ol class="bullet-point">
                <li v-for="hobby, index in layout.hobbies.content" :key="index">
                  <div class="bullet">
                    <Transition name="slide-fade">
                      <svg v-if="hobby.hobby" aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                        <circle stroke="none" cx="16" cy="16" r="10"></circle>
                      </svg>
                    </Transition>
                  </div>
                  <div>
                    <Transition name="slide-fade">
                      <h4 v-if="hobby.hobby !== ''">{{ hobby.hobby }}</h4>
                    </Transition>
                  </div>
                </li>
              </ol>
            </template>
          </Section>
          <!-- END HOBBIES -->
        </div>
        <!-- END RIGHT GROUP -->
      </div>
      <!-- END GROUPS -->


    </div>
  </div>
</template>

<style lang="scss">
// Bullet Point +
.bullet-point {
		list-style: disc;
		display: flex;
		flex-direction: column;
		margin-left: 0.6rem;

		// List Item +
		li {
			display: flex;
			flex-wrap: wrap;
			gap: 0.4rem;
			position: relative;
			margin: 0;
			padding-bottom: 2em;
			padding-left: 1.25rem;

			&::before {
				background-color: var(--mid-grey);
				width: 0.125rem;
				content: '';
				position: absolute;
				top: 0rem;
				min-height: 2.8rem;
				height: 100%;
				bottom: 0rem;
				left: 0.313rem;
			}

			&:first-child::before {
				/* Start the line further down on the first list item */
				top: 0.8rem;
			}

			&:last-child::before {
				/* Stop the line short on the final list item */
				height: 2.813rem;
			}
		}

		// List Item -

		// Bullet +
		.bullet {
			margin-left: -1.31rem;
			width: 1.5rem;
			fill: var(--mid-grey);
			float: left;
			padding-right: 0.625rem;
			position: absolute;
		}

		// Bullet -
	}

	// Bullet Point -

.reduce-size {
  font-weight: normal !important;
  font-size: 0.9rem !important;
}
  
#resume1{
  &>.resume-wrapper{
    background-color: var(--alabaster);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    // BEGIN HEAD
    &>.head{
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 1rem;

      &>.col1{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        flex-wrap: wrap;
        word-break: break-all;

        h1{
          text-align: end;
        }
      }

      &>.col2{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        border-left: 0.1rem solid var(--gunmetal);

        .logo{
          width: 50%;
          height: 50%;
        }

        h2{
          width: 90%;
        }
      }

      &>.border-bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column-start: 1;
        grid-column-end: 3;

        .border-1{
          width: 10%;
          border: 0.3rem solid var(--gunmetal);
        }
        .border-2{
          width: 80%;
          border: 0.1rem solid var(--gunmetal);
        }
      }

    }
    // END HEAD


    &>.row3{
      display: grid;
      grid-template-columns: 60% 40%;

      .left-group{

        // BEGIN JOB EXPERIENCE
        .job-experience{
          display: flex;
          flex-direction: column;

          .experience{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2.6rem;

            .row1{
              display: flex;
              flex-wrap: wrap;
            }

            .row2{
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              p,span{
                color: var(--pastel-grey);
              }
            }

            .row3{
              width: 74%;
            }

            .row4{
              list-style: disc;
              margin-left: 1rem;
            }
          }
        }
        // END JOB EXPERIENCE

        // BEGIN PERSONAL PROJECTS
        .personal-projects{
          .project{
            display: flex;
            flex-direction: column;
            gap: 0.4rem;

            .links{
              display: flex;
              justify-content: start;
              gap: 2rem;
              margin-top: 1rem;
            }
          }
        }
        // END PERSONAL PROJECTS

      }

      .right-group{
        margin-top: 0.4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

         // BEGIN EDUCATION HISTORY
         .education-history{
          .body{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            .row1, .row2, .row3{
              width: 66%;
            }

            .row2{
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              p, span{
                color: var(--pastel-grey);
              }

              
            }

          }
        }
        // END EDUCATION HISTORY

        // BEGIN TECHNICAL SKILLS
        .technical-skills{
          .body{
            width: 100%;
            word-wrap: break-word;

            h4{
              display: flex;
              flex-wrap: wrap;
              width: 100%;
            }

            .detail{
              width: 94%;
              font-weight: normal;
              font-size: 1rem;
            }
          }
        }
        // END TECHNICAL SKILLS
      }

    }

  }
}
</style>
