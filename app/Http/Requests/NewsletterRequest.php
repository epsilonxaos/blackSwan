<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class NewsletterRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
	 */
	public function rules(): array
	{
		return [
			'correo' => [
				'required',
				'email',
				'unique:newsletters,correo'
			]
		];
	}

	public function failedValidation(Validator $validator)
	{
		throw new HttpResponseException(response([
			'success' => false,
			'message' => $validator->errors()->first('correo'),
		], 409));
	}

	/**
	 * Get the error messages for the defined validation rules.
	 *
	 * @return array
	 */
	public function messages()
	{
		return [
			'correo.required' => 'El correo eléctronico es requerido',
			'correo.email' => 'El correo eléctronico no es valido',
			'correo.unique' => 'El correo eléctronico ya se encuentra registrado'
		];
	}
}
