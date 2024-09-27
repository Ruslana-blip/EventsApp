<template>
	<Form class="form" @submit="saveUser">
		<div class="form__field">
			<label for="full__name" class="form__label"> Full name </label>
			<Field
				:rules="validateName"
				id="full__name"
				class="form__input"
				type="text"
				name="full_name"
				placeholder="Full name"
				v-model="fullName"
			/>
			<ErrorMessage name="full_name" class="form__error" />
		</div>
		<div class="form__field">
			<label for="email" class="form__label"> Email </label>
			<Field
				:rules="validateEmail"
				id="email"
				class="form__input"
				type="email"
				name="email"
				placeholder="Email"
				v-model="email"
			/>
			<ErrorMessage name="email" class="form__error" />
		</div>
		<div class="form__field">
			<label for="birth" class="form__label"> Date of birth </label>
			<Field
				:rules="validateBirth"
				id="birth"
				class="form__input"
				type="date"
				name="birth__date"
				placeholder="Birth date"
			/>
			<ErrorMessage name="birth__date" class="form__error" />
		</div>
		<div class="form__field">
			<label class="form__label">Where did you hear about this event?</label>
			<div class="form__radioGroup">
				<label class="form__radioLabel">
					<Field
						type="radio"
						name="source"
						value="socialMedia"
						class="form__radio"
					/>
					Social Media
				</label>
				<label class="form__radioLabel">
					<Field
						type="radio"
						name="source"
						value="friends"
						class="form__radio"
					/>
					Friends
				</label>
				<label class="form__radioLabel">
					<Field
						type="radio"
						name="source"
						value="foundMyself"
						class="form__radio"
					/>
					Found myself
				</label>
			</div>
			<ErrorMessage name="source" class="form__error" />
		</div>

		<div class="form__actions">
			<button type="submit" class="form__button">Registration</button>
			<RouterLink class="form__allEvents" :to="{ name: 'EventsPage' }"
				>All events</RouterLink
			>
		</div>
	</Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useEventsStore } from '@/stores/EventsStore';
import { mapState } from 'pinia';
export default {
	name: 'RegisterPage',
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			fullName: '',
			email: '',
			user: {},
		};
	},
	computed: {
		...mapState(useEventsStore, ['users']),
	},
	methods: {
		validateName(fullName) {
			if (!fullName) return 'This field is required.';
			const validRegexName = /^[A-Za-zА-Яа-яЁёІіЇїЄє' -]{2,}$/;
			if (!validRegexName.test(fullName)) {
				return 'This field must be a valid name.';
			}
			return true;
		},
		validateBirth(birthDate) {
			if (!birthDate) return 'This field is required.';
			const birthDateObject = new Date(birthDate);

			if (isNaN(birthDateObject.getTime())) {
				return 'Please enter a valid date.';
			}
			const year = birthDateObject.getFullYear();
			if (year < 1950 || year > new Date().getFullYear()) {
				return 'The year must be greater than 1950 but <= to the current year.';
			}
			return true;
		},
		validateEmail(email) {
			if (!email) return 'This field is required.';
			const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			if (!validEmailRegex.test(email)) {
				return 'This field must be a valid email address.';
			}
			return true;
		},
		saveUser() {
			this.user = {
				id: Date.now(),
				name: this.fullName,
				email: this.email,
			};
			this.users.push(this.user);
			alert('You are registered');

			this.$router.push({ name: 'EventsPage' });
		},
	},
};
</script>

<style lang="scss" scoped>
.form {
	margin: 0 auto;
	box-shadow: 0 0 6px 2px $grey;
	padding: 40px;
	&__field {
		margin-bottom: 16px;
	}

	&__label {
		display: block;
		font-weight: bold;
		margin-bottom: 8px;
		color: $black;
	}

	&__input {
		width: 100%;
		padding: 10px;
		border: 1px solid $grey;
		border-radius: 4px;
		font-size: 16px;
		&:focus {
			border-color: $dark-blue;
			outline: none;
			box-shadow: 0 0 5px $dark-blue;
		}
	}

	&__error {
		color: $red;
		font-size: 14px;
		margin-top: 4px;
	}

	&__email {
		&__radioGroup {
			margin-bottom: 16px;
		}

		&__radioLabel {
			margin-right: 12px;
			font-weight: normal;
			cursor: pointer;
		}

		&__radio {
			margin-right: 4px;
			cursor: pointer;
		}
	}
	&__button {
		background-color: $dark-blue;
		color: $white;
		padding: 10px 26px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s;
		&:hover {
			background-color: $ligth-blue;
		}
	}

	&__actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 16px;
	}
	&__allEvents {
		color: $dark-blue;
		text-decoration: none;
		font-size: 16px;
		transition: color 0.3s;

		&:hover {
			color: $ligth-blue;
			text-decoration: underline;
		}
	}
}
</style>
