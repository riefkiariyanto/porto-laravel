<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia; 
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class SuperAdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('SuperAdmin/Dashboard', [
            'users' => User::all()
        ]);
    }

   public function update(Request $request, User $user)
    {
            $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'role' => ['required', Rule::in(['superadmin', 'admin', 'user'])],
            'email_verified_at' => 'nullable|date',
        ]);
            $user->update($validated);

            if (!empty($validated['email_verified_at'])) {
            $user->email_verified_at = \Carbon\Carbon::parse($validated['email_verified_at']);
            } else {
                $user->email_verified_at = null;
            }
            $user->save();
            
            if (auth()->user()->role === 'superadmin') {
            DB::table('sessions')->where('user_id', $user->id)->delete();
            }

            return redirect()->back()->with('success', 'User updated successfully');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

       return redirect()->back()->with('success', 'User updated successfully');
    }
}
