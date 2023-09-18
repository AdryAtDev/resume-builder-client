<script setup>
import {useLayout1Store} from '@/stores/layout1.js';
import Section from '@/components/resume/Section.vue';

const layout = useLayout1Store();
const locale = layout.i18n.locale;

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
    <div class="resume-wrapper" v-for="section, index in layout.resume" :key="index">

      <!-- BEGIN HEAD -->
      <div class="row1 head" v-if="section.id == 'head-section'">
        <!-- BEGIN HEAD LEFT -->
        <div class="col1">
          <h1>Lorem ipsum dolor</h1>
        </div>
        <!-- END HEAD LEFT -->

        <!-- BEGIN HEAD RIGHT -->
        <div class="col2">
          <img class="logo" src="@/assets/icons/atdev-logo.png" alt="ATDEV Logo">
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
        <!-- END  HEAD RIGHT -->

        <!-- BEGIN BORDER BOTTOM -->
        <div class="border-bottom">
          <div class="border-1"></div>
          <div class="border-2"></div>
        </div>
        <!-- END BORDER BOTTOM -->
      </div>
      <!-- END HEAD -->

      <!-- BEGIN PROFILE INFO -->
      <div class="row2 profile-info" v-if="section.id == 'profile-info-section'">
        <Section :icon="section.icon" :title="section.i18n.Title[locale]">
          <template #body>
            <p v-html="layout.getSection('profile-info-section').content[0].profileInfo"></p>
          </template>
        </Section>
      </div>
      <!-- END PROFILE INFO -->

      <!-- BEGIN GROUPS -->
      <div class="row3">
        <!-- BEGIN LEFT GROUP -->
        <div class="left-group">

          <!-- BEGIN JOB EXPERIENCE -->
          <Section class="job-experience" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'job-experience-section'" >
            <template #body>
              <div class="experience" v-for="experience, index in section.content" :key="index">
                <div class="row1">
                  <p> <strong>{{experience.position}}</strong> <b>|</b> <strong>{{experience.employer}}</strong><b>,</b> {{experience.city}}<span>,</span> {{experience.country}} <span>|</span> <b v-if="experience.isRemote">{{section.i18n.Remote.label[locale]}}</b> </p>
                </div>

                <div class="row2">
                  <p> {{transformDateMY(experience.startDate)}} </p> <span>-</span> <p v-if="experience.isWorking">{{section.i18n.DateWorking[locale]}}</p> <p v-else>{{transformDateMY(experience.finishDate)}}</p>
                </div>

                <div class="row3">
                  <p v-html="experience.description"></p>
                </div>

                <ol class="row4">
                  <li v-for="task, index in experience.tasks" :key="index">
                    <p v-html="task.task"></p>
                  </li>
                </ol>
              </div>
            </template>
          </Section>
          <!-- END JOB EXPERIENCE -->

          <!-- BEGIN PERSONAL PROJECTS -->
          <Section class="personal-projects" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'personal-projects-section'" >
            <template #body>
              <div class="project" v-for="project, index in section.content" :key="index">
                <h4>{{project.title}}</h4>
                <p v-html="project.description"></p>
                <div class="links">
                  <a href="#">{{project.repositoryLink}}</a>
                  <a href="#">{{project.websiteLink}}</a>
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
          <Section class="education-history" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'education-history-section'" >
            <template #body>
            </template>
          </Section>
          <!-- END EDUCATION HISTORY -->

          <!-- BEGIN TECHNICAL SKILLS -->
          <Section class="technical-skills" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'technical-skills-section'" >
            <template #body>
            </template>
          </Section>
          <!-- END TECHNICAL SKILLS -->

          <!-- BEGIN PERSONAL SKILLS -->
          <Section class="technical-skills" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'personal-skills-section'" >
            <template #body>
            </template>
          </Section>
          <!-- END PERSONAL SKILLS -->

          <!-- BEGIN CERTIFICATIONS -->
          <Section class="certifications" :icon="section.icon" :title="section.i18n.Title[locale]" v-if="section.id == 'certifications-section'" >
            <template #body>
            </template>
          </Section>
          <!-- END CERTIFICATIONS -->
        </div>
        <!-- END RIGHT GROUP -->
      </div>
      <!-- END GROUPS -->


    </div>
  </div>
</template>

<style lang="scss">
#resume1{
  &>.resume-wrapper{
    background-color: var(--alabaster);
    padding: 1rem;

    // BEGIN HEAD
    &>.row1{
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 1rem;

      &>.col1{
        display: flex;
        align-items: center;
        justify-content: end;
      }

      &>.col2{
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

      .left-group{
        // BEGIN JOB EXPERIENCE
        .job-experience{
          .experience{
            display: flex;
            flex-direction: column;
            gap: 1rem;

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
          .links{
            display: flex;
            justify-content: space-between;
          }
        }
        // END PERSONAL PROJECTS

      }

      .right-group{
      }

    }

  }
}
</style>
