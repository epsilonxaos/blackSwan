@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto">

        <p class="pb-2 text-xs">
            Si desea eliminar todos los registros actuales para obtener nuevos, puede eliminar todos los datos, esta acción
            es irrevertible, por lo que le pedimos tener cuidado al realizar esta operación ya que los datos se perderan
            para siempre, antes de ejecutar le recomendamos realizar los respaldos pertinentes exportando los datos actuales
            en excel.
        </p>
        <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900 mb-3">
            <a href="{{ route('panel.usuarios.create') }}"
                class="px-2 py-1 bg-green-800 border border-transparent rounded-md font-semibold text-xs mr-2 text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">

                <svg class="w-5 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M12 17v-6"></path>
                    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
                </svg>
                Exportal a Excel
            </a>
            <form action="{{ route('panel.newsletter.destroyAll') }}" method="post" class="inline delete-form-all">
                @csrf
                @method('DELETE')
                <button title="Eliminar" type="button" onclick="deleteSubmitForm('all')"
                    class="px-2 py-1 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">

                    <svg class="w-5 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor"
                        stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path>
                        <path d="M4 6v6c0 1.657 3.582 3 8 3c.537 0 1.062 -.02 1.57 -.058"></path>
                        <path d="M20 13.5v-7.5"></path>
                        <path d="M4 12v6c0 1.657 3.582 3 8 3c.384 0 .762 -.01 1.132 -.03"></path>
                        <path d="M22 22l-5 -5"></path>
                        <path d="M17 22l5 -5"></path>
                    </svg>
                    Eliminar todos los datos
                </button>
            </form>
            {{-- @can(PermissionKey::Socios['permissions']['create']['name'])
            @endcan --}}

        </div>
        <div class="hidden text-blue-600 dark:text-blue-500"></div>
        <div class="hidden text-emerald-600 dark:text-emerald-500"></div>
        <div class="hidden text-pink-600 dark:text-pink-500"></div>

        {{ $dataTable->table() }}
    </div>
@endsection

@push('script')
    {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
