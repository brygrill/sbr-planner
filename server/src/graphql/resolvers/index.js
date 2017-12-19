import moment from 'moment';
import helpers from '../../helpers';
import weekSummaryLoader from '../../controllers/strava-summarize-weeks';

const { formatHoursNum } = helpers;

const resolverMap = {
  WeekSummary: {
    time_total_hrs(week) {
      return formatHoursNum(week.time_total_sec);
    },
    time_total_hrs_str(week) {
      return moment('1900-01-01 00:00:00')
        .add(week.time_total_sec, 'seconds')
        .format('HH:mm');
    },
  },
  Activity: {
    single_activity(_, args) {
      return `Return activity data for ${args.id}`;
    },
    async week_summary(_, args, ctx) {
      const data = await weekSummaryLoader(ctx.strava_token, args.count);
      return data;
    },
  },
  Dash: {
    uid(_, args, ctx) {
      return ctx.uid;
    },
    strava_token(_, args, ctx) {
      return ctx.strava_token;
    },
  },
  Strava: {
    athlete() {
      return 'Athlete info returned here';
    },
    activity(_, args, ctx) {
      return { _, args, ctx };
    },
  },
  Query: {
    dash(_, args, ctx) {
      return { _, args, ctx };
    },
    strava(_, args, ctx) {
      return { _, args, ctx };
    },
  },
};

export default resolverMap;
