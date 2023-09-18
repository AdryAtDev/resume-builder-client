<script setup>
import { useAppStore } from '@/stores/app';
import { useLayout1Store } from '@/stores/layout1.js';
import { Icon } from '@iconify/vue';
import InputText from '@/components/forms/InputText.vue';
import Collapse from '@/components/Collapse.vue';
import RichText from '@/components/RichText.vue';
import IconBtn from '@/components/forms/IconBtn.vue'
import ConfirmationBtn from '@/components/ConfirmationBtn.vue';

const layout = useLayout1Store();
const app = useAppStore();

const allowDrop = (draggingNode, dropNode, type) => {
    if (type === 'inner') {
        return false
    } else {
        return type
    }
}
</script>

<template>
  <div id="builder1">
    <h1>{{layout.i18n.pageTitle[app.locale]}}</h1>

    <div class="sections-wrapper" v-for="section, index in layout.resume" :key="index">
      <!-- BEGIN HEAD -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'head-section'">
        <template #body>
          <div class="head">
            <InputText :inputId="section.id + '-name'" @input-text="(text) => section.content[0].name = text" :label="section.i18n.Name.label[app.locale]" :placeholder="section.i18n.Name.placeholder[app.locale]" />
            <InputText :inputId="section.id + '-position'" @input-text="(text) => section.content[0].position = text" :label="section.i18n.Position.label[app.locale]" :placeholder="section.i18n.Position.placeholder[app.locale]" />
          </div>
        </template>
      </Collapse>
      <!-- END HEAD -->

      <!-- BEGIN PROFILE INFO -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'profile-info-section'">
        <template #body>
          <div class="profile-info">
            <RichText characterLimit="500" typeOfToolbar="complex" v-model="section.content[0].profileInfo" />
          </div>
        </template>
      </Collapse>
      <!-- END PROFILE INFO -->

      <!-- BEGIN JOB EXPERIENCE -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'job-experience-section'" v-for="experienceIndex in 1" :key="experienceIndex">
        <template #body>
          <IconBtn icon="material-symbols:add" label="Add an Experience" @click="layout.addJobExperience()" />
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <Collapse class="section" :title="data.position" :description="data.employer">
                <template #body>
                  <div class="job-experience">
                    <div class="icon-btn-delete-section">
                      <ConfirmationBtn :title="data.position" :description="data.employer" :cancel="layout.i18n.cancel[app.locale]" >
                        <template #label>
                          <Icon icon="ph:trash-bold" />
                        </template>
                        <template #confirm>
                          <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                        </template>
                      </ConfirmationBtn>
                    </div>
                    <div class="row1">
                      <InputText :inputId="data.id + '-position'" @input-text="(text) => data.position = text" :label="section.i18n.Position.label[app.locale]" :placeholder="section.i18n.Position.placeholder[app.locale]" />
                      <InputText :inputId="data.id + '-employer'" @input-text="(text) => data.employer = text" :label="section.i18n.Employer.label[app.locale]" :placeholder="section.i18n.Employer.placeholder[app.locale]" />
                      <InputText :inputId="data.id + '-city'" @input-text="(text) => data.city = text" :label="section.i18n.City.label[app.locale]" :placeholder="section.i18n.City.placeholder[app.locale]" />
                      <InputText :inputId="data.id + '-country'" @input-text="(text) => data.country = text" :label="section.i18n.Country.label[app.locale]" :placeholder="section.i18n.Country.placeholder[app.locale]" />
                      <el-checkbox class="checkbox" v-model="data.isWorking" :label="section.i18n.Working.label[app.locale]" size="small" border />
                      <el-checkbox class="checkbox" v-model="data.isRemote" :label="section.i18n.Remote.label[app.locale]" size="small" border />
                      <el-date-picker class="date-picker" v-model="data.startDate" type="month" format="MM-YYYY" :placeholder="section.i18n.StartDate.placeholder[app.locale]" />
                      <el-date-picker class="date-picker" v-model="data.finishDate" type="month" format="MM-YYYY" :placeholder="section.i18n.FinishDate.placeholder[app.locale]" v-if="data.isWorking == false" />
                    </div>
                    <RichText class="rich-text" characterLimit="150" typeOfToolbar="normal" v-model="data.description" />

                    <!-- BEGIN TASKS -->
                    <el-tree :allow-drop="allowDrop" :data="data.tasks" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
                      <template #default="{ data }">
                        <Collapse :title="section.i18n.Tasks[app.locale]" :description="data.task" >
                          <template #body>
                            <div class="tasks item">
                              <div class="icon-btn-delete-item">
                                <ConfirmationBtn :title="section.i18n.Tasks[app.locale]" :description="data.task" :cancel="layout.i18n.cancel[app.locale]" >
                                  <template #label>
                                    <Icon icon="ph:trash-bold"  />
                                  </template>
                                  <template #confirm>
                                    <p @click="layout.deleteJobExperienceTask(section.content[experienceIndex - 1].id)">{{layout.i18n.confirm[app.locale]}}</p>
                                  </template>
                                </ConfirmationBtn>
                              </div>
                              <RichText characterLimit="120" typeOfToolbar="normal" v-model="data.task" />
                            </div>
                          </template>
                        </Collapse>
                      </template>
                    </el-tree>
                    <!-- END TASKS -->
                    <IconBtn icon="material-symbols:add" label="Add a task" @click="layout.addJobExperienceTask(section.content[experienceIndex - 1].id)" />
                  </div>
                </template>
              </Collapse>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add an Experience" @click="layout.addJobExperience()" />
        </template>
      </Collapse>
      <!-- END JOB EXPERIENCE -->

      <!-- BEGIN EDUCATION HISTORY-->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'education-history-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <Collapse class="section" :title="data.title" :description="data.institute">
                <template #body>
                  <div class="education-history">
                    <div class="icon-btn-delete-section">
                      <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                        <template #label>
                          <Icon icon="ph:trash-bold"  />
                        </template>
                        <template #confirm>
                          <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                        </template>
                      </ConfirmationBtn>
                    </div>
                    <InputText :inputId="data.id + '-title'" @input-text="(text) => data.title = text" :label="section.i18n.EducationTitle.label[app.locale]" :placeholder="section.i18n.EducationTitle.placeholder[app.locale]" />
                    <InputText :inputId="data.id + '-institute'" @input-text="(text) => data.institute = text" :label="section.i18n.EducationInstitute.label[app.locale]" :placeholder="section.i18n.EducationInstitute.placeholder[app.locale]" />
                    <div class="date-picker-group">
                      <el-date-picker class="date-picker" v-model="data.startDate" type="month" format="MM-YYYY" :placeholder="section.i18n.EducationStartDate.placeholder[app.locale]" />
                      <el-date-picker class="date-picker" v-model="data.finishDate" type="month" format="MM-YYYY" :placeholder="section.i18n.EducationFinishDate.placeholder[app.locale]" />
                    </div>
                  </div>
                </template>
              </Collapse>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add Education" @click="layout.addEducationHistory()" />
        </template>
      </Collapse>
      <!-- END EDUCATION HISTORY -->

      <!-- BEGIN TECHNICAL SKILLS -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'technical-skills-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <Collapse class="section" :title="data.skill" :description="data.detail" >
                <template #body>
                  <div class="technical-skills" >
                    <div class="icon-btn-delete-section">
                      <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                        <template #label>
                          <Icon icon="ph:trash-bold"  />
                        </template>
                        <template #confirm>
                          <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                        </template>
                      </ConfirmationBtn>
                    </div>
                    <InputText :inputId="data.id + '-skill'" @input-text="(text) => data.skill = text" :label="section.i18n.Skill.labelSkill[app.locale]" :placeholder="section.i18n.Skill.placeholderSkill[app.locale]" />
                    <InputText :inputId="data.id + '-detail'" @input-text="(text) => data.detail = text" :label="section.i18n.Skill.labelDetail[app.locale]" :placeholder="section.i18n.Skill.placeholderDetail[app.locale]" />
                  </div>
                </template>
              </Collapse>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add a Skill" @click="layout.addTechnicalSkills()" />
        </template>
      </Collapse>
      <!-- END TECHNICAL SKILLS -->

      <!-- BEGIN PERSONAL SKILLS -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'personal-skills-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <div class="personal-skills item">
                <div class="icon-btn-delete-item">
                  <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                    <template #label>
                      <Icon icon="ph:trash-bold"  />
                    </template>
                    <template #confirm>
                      <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                    </template>
                  </ConfirmationBtn>
                </div>
                <InputText :inputId="data.id + '-skill'" @input-text="(text) => data.skill = text" :label="section.i18n.Skill.label[app.locale]" :placeholder="section.i18n.Skill.placeholder[app.locale]" />
              </div>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add a Skill" @click="layout.addPersonalSkills()" />
        </template>
      </Collapse>
      <!-- END PERSONAL SKILLS -->

      <!-- BEGIN CERTIFICATIONS -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'certifications-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <div class="certifications item">
                <div class="icon-btn-delete-item">
                  <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                    <template #label>
                      <Icon icon="ph:trash-bold"  />
                    </template>
                    <template #confirm>
                      <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                    </template>
                  </ConfirmationBtn>
                </div>
                <InputText :inputId="data.id + '-certification'" @input-text="(text) => data.certification = text" :label="section.i18n.label[app.locale]" :placeholder="section.i18n.placeholder[app.locale]" />
              </div>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add a Certification" @click="layout.addCertifications()" />
        </template>
      </Collapse>
      <!-- END CERTIFICATIONS -->

      <!-- BEGIN HOBBIES -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'hobbies-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <div class="hobbies item">
                <div class="icon-btn-delete-item">
                  <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                    <template #label>
                      <Icon icon="ph:trash-bold"  />
                    </template>
                    <template #confirm>
                      <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                    </template>
                  </ConfirmationBtn>
                </div>
                <InputText :inputId="data.id + '-hobby'" @input-text="(text) => data.hobby = text" :label="section.i18n.Hobby.label[app.locale]" :placeholder="section.i18n.Hobby.placeholder[app.locale]" />
              </div>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add a Hobby" @click="layout.addHobbies()" />
        </template>
      </Collapse>
      <!-- END HOBBIES -->

      <!-- BEGIN PERSONAL PROJECTS -->
      <Collapse :icon="section.icon" :title="section.i18n.Title[app.locale]" :description="section.i18n.Description[app.locale]" v-if="section.label == 'personal-projects-section'">
        <template #body>
          <el-tree :allow-drop="allowDrop" :data="section.content" empty-text="i18n.empty[app.locale]" draggable default-expand-all node-key="id">
            <template #default="{ data }">
              <Collapse class="section" :title="data.title" :description="data.description">
                <template #body>
                  <div class="personal-projects">
                    <div class="icon-btn-delete-section">
                      <ConfirmationBtn :title="data.title" :description="data.institute" :cancel="layout.i18n.cancel[app.locale]" >
                        <template #label>
                          <Icon icon="ph:trash-bold"  />
                        </template>
                        <template #confirm>
                          <p @click="layout.deleteSectionItem(section.id, data.id)">{{layout.i18n.confirm[app.locale]}}</p>
                        </template>
                      </ConfirmationBtn>
                    </div>
                    <InputText :inputId="data.id + '-project'" @input-text="(text) => data.title = text" :label="section.i18n.ProjectName.label[app.locale]" :placeholder="section.i18n.ProjectName.placeholder[app.locale]" />
                    <RichText characterLimit="100" typeOfToolbar="complex" v-model="data.description" />
                    <InputText :inputId="data.id + '-repository'" @input-text="(text) => data.repositoryLink = text" :label="section.i18n.Repository.link.label[app.locale]" :placeholder="section.i18n.Repository.link.placeholder[app.locale]" />
                    <InputText :inputId="data.id + '-website'" @input-text="(text) => data.websiteLink = text" :label="section.i18n.Website.link.label[app.locale]" :placeholder="section.i18n.Website.link.placeholder[app.locale]" />
                  </div>
                </template>
              </Collapse>
            </template>
          </el-tree>
          <IconBtn icon="material-symbols:add" label="Add a Personal Project" @click="layout.addPersonalProjects()" />
        </template>
      </Collapse>
      <!-- END PERSONAL PROJECTS -->
    </div>
  </div>
</template>

<style lang="scss">
.el-tree {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 2rem;
  --el-tree-node-content-height: none;
  --el-tree-node-hover-bg-color: transparent;
}

#builder1{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--alabaster);

  .date-picker{
    width: 100% !important;
  }

  .section {
    position: relative;

    .icon-btn-delete-section{
      position: absolute;
      top: 6rem;
      right: 1.6rem;
    }
  }

  .item {
    width: 96%;
    position: relative;

    .icon-btn-delete-item{
      position: absolute;
      right: -2.8rem;
      top: 48%;
    }
  }

  // BEGIN HEAD
  .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  // END HEAD

  // BEGIN JOB Experience
  .job-experience{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .row1{
      width: 98%;
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 1rem;
    }

    .checkbox{
      width: 100%;
      display: flex !important;
      flex-direction: row !important;
      justify-content: center;
      border: 1px solid var(--celestial-blue) !important;

      span {
          color: var(--celestial-blue) !important;
      }
    }

    .tasks {
      width: 92%;
      .icon-btn-delete-item{
        top: 46%;
      }
    }

  }
  // END JOB EXPERIENCE

  // BEGIN EDUCATION HISTORY
  .education-history{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .date-picker-group{
      display: flex;
      gap: 1rem;
    }
  }
  // END EDUCATION HISTORY

  // BEGIN TECHNICAL SKILLS
  .technical-skills{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  // END TECHNICAL SKILLS

  // BEGIN PERSONAL SKILLS
  .personal-skills{
    width: 94%;
  }
  // END PERSONAL SKILLS

  // BEGIN CERTIFICATIONS
  .certifications{
    width: 94%;
  }
  // END CERTIFICATIONS

  // BEGIN HOBBIES
  .hobbies{
    width: 94%;
  }
  // END HOBBIES

  // BEGIN PERSONAL PROJECTS
  .personal-projects{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  // END PERSONAL PROJECTS

}

</style>
