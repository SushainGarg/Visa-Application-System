import mongoose from "mongoose";


var system_preferences = mongoose.Schema;({
  permissions: {
    role_based: {
      type: String
    },
    access_permissions: {
      type: String
    }
  },
  profile_settings: {
    language_and_display: {
      type: String
    },
    notification_preferences: {
      type: String
    }
  },
  activity: {
    user_activity_log: {
      type: String
    },
    activity_timestamp: {
      type: String
    }
  },
  preferences_and_customisations: {
    default_settings: {
      type: String
    },
    customizable_settings: {
      type: String
    }
  },
  general: {
    time_zone_settings: {
      type: String
    },
    landing_page: {
      type: String
    }
  },
  Visa_Applicant: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const user_preferences = mongoose.model("system_preferences", system_preferences);

export default user_preferences;
